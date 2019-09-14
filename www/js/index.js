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

function setupListeners() {
  FCMPlugin.getToken(function(token) {
    addToLog("<p>Started listening as " + token + "</p>");
  });
  FCMPlugin.onNotification(function(data) {
    addToLog("<pre>" + JSON.stringify(data, null, 2) + "</pre>");
  });
  FCMPlugin.onTokenRefresh(function(token) {
    addToLog("<p>Token refreshed to " + token + "</p>");
  });
}

document.addEventListener("deviceready", setupListeners, false);
