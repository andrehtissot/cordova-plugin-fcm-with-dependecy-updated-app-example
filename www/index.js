function formatNow() {
  var now = new Date();
  return (
    now.getHours() +
    ":" +
    now.getMinutes() +
    ":" +
    now.getSeconds() +
    "." +
    now.getMilliseconds()
  );
}

function addToLog(log) {
  document.getElementById("notification-logs").innerHTML =
    "<hr>" +
    "<p>Received at " +
    formatNow() +
    "</p>" +
    log +
    document.getElementById("notification-logs").innerHTML;
}

function trySomeTimes(func, onSuccess, onFailure) {
  var tries = 100;
  var interval = setInterval(function() {
    func(
      function(result) {
        if ((result !== null && result !== "") || --tries < 0) {
          clearInterval(interval);
          onSuccess(result);
        }
      },
      function(e) {
        clearInterval(interval);
        onFailure(e);
      }
    );
  }, 100);
}

function setupOnTokenRefresh() {
  FCMPlugin.onTokenRefresh(
    function(token) {
      addToLog("<p>Token refreshed to " + token + "</p>");
    },
    function(error) {
      addToLog("<p>Error on checking permission: " + error + "</p>");
    }
  );
}

function setupOnNotification() {
  FCMPlugin.onNotification(function(data) {
    addToLog("<pre>" + JSON.stringify(data, null, 2) + "</pre>");
  });
}

function getToken() {
  trySomeTimes(
    FCMPlugin.getToken,
    function(token) {
      addToLog("<p>Started listening as " + token + "</p>");
      setupOnTokenRefresh();
      setupOnNotification();
    },
    function(error) {
      addToLog("<p>Error on listening for token: " + error + "</p>");
    }
  );
}

function setupListeners() {
  trySomeTimes(
    FCMPlugin.hasPermission,
    function(hasPermission) {
      if (hasPermission) {
        getToken();
        return;
      }
      addToLog("<p>Push permission was not given to this application</p>");
    },
    function(error) {
      addToLog("<p>Error on checking permission: " + error + "</p>");
    }
  );
}

document.addEventListener("deviceready", setupListeners, false);
