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

function getToken(onSuccess, onFailure) {
  var tries = 100;
  var interval = setInterval(function() {
    if (--tries < 0) {
      clearInterval(interval);
      onFailure(new Error("Firebase Token could not be acquired!"));
    }
    FCMPlugin.getToken(
      function(tokenFound) {
        if (tokenFound !== null && tokenFound !== "") {
          clearInterval(interval);
          onSuccess(tokenFound);
        }
      },
      function(e) {
        onFailure(e);
      }
    );
  }, 100);
}

function setupListeners() {
  getToken(
    function(token) {
      addToLog("<p>Started listening as " + token + "</p>");
      FCMPlugin.onTokenRefresh(function(token) {
        addToLog("<p>Token refreshed to " + token + "</p>");
      });
      FCMPlugin.onNotification(function(data) {
        addToLog("<pre>" + JSON.stringify(data, null, 2) + "</pre>");
      });
    },
    function(error) {
      addToLog("<p>Error on listening for token: " + error.message + "</p>");
    }
  );
}

document.addEventListener("deviceready", setupListeners, false);
