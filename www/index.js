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

function trySomeTimes(asyncFunc, onSuccess, onFailure, customTries) {
  var tries = typeof customTries === "undefined" ? 100 : customTries;
  var interval = setTimeout(function () {
    if (typeof asyncFunc !== "function") {
      onSuccess("Unavailable");
      return;
    }
    asyncFunc()
      .then(function (result) {
        if ((result !== null && result !== "") || tries < 0) {
          onSuccess(result);
        } else {
          trySomeTimes(asyncFunc, onSuccess, onFailure, tries - 1);
        }
      })
      .catch(function (e) {
        clearInterval(interval);
        onFailure(e);
      });
  }, 100);
}

function setupOnTokenRefresh() {
  FCM.eventTarget.addEventListener(
    "tokenRefresh",
    function (data) {
      addToLog("<p>FCM Token refreshed to " + data.detail + "</p>");
    },
    false
  );
}

function setupOnNotification() {
  FCM.eventTarget.addEventListener(
    "notification",
    function (data) {
      addToLog("<pre>" + JSON.stringify(data.detail, null, 2) + "</pre>");
    },
    false
  );
  FCM.getInitialPushPayload()
    .then((payload) => {
      addToLog(
        "<p>Initial Payload</p><pre>" +
          JSON.stringify(payload, null, 2) +
          "</pre>"
      );
    })
    .catch((error) => {
      addToLog(
        "<p>Initial Payload Error</p><pre>" +
          JSON.stringify(error, null, 2) +
          "</pre>"
      );
    });
}

function logFCMToken() {
  trySomeTimes(
    FCM.getToken,
    function (token) {
      addToLog("<p>Started listening FCM as " + token + "</p>");
    },
    function (error) {
      addToLog("<p>Error on listening for FCM token: " + error + "</p>");
    }
  );
}

function logAPNSToken() {
  if (cordova.platformId !== "ios") {
    return;
  }
  FCM.getAPNSToken(
    function (token) {
      addToLog("<p>Started listening APNS as " + token + "</p>");
    },
    function (error) {
      addToLog("<p>Error on listening for APNS token: " + error + "</p>");
    }
  );
}

function setupClearAllNotificationsButton() {
  document.getElementById("clear-all-notifications").addEventListener(
    "click",
    function () {
      FCM.clearAllNotifications();
    },
    false
  );
}

function waitForPermission(callback) {
  FCM.requestPushPermission()
    .then(function (didIt) {
      if (didIt) {
        callback();
      } else {
        addToLog("<p>Push permission was not given to this application</p>");
      }
    })
    .catch(function (error) {
      addToLog("<p>Error on checking permission: " + error + "</p>");
    });
}

function setupListeners() {
  waitForPermission(function () {
    FCM.createNotificationChannel({
      id: "sound_alert6",
      name: "Sound Alert6",
      // description: "Useless",
      importance: "high",
      // visibility: "public",
      sound: "elet_mp3",
      // lights: false,
      // vibration: false,
    });
    logFCMToken();
    logAPNSToken();
    setupOnTokenRefresh();
    setupOnNotification();
    setupClearAllNotificationsButton();
  });
}

document.addEventListener("deviceready", setupListeners, false);
