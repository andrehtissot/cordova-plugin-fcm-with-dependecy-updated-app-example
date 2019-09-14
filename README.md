# cordova-plugin-fcm-with-dependecy-updated-app-example

[![GitHub license](https://img.shields.io/github/license/andrehtissot/cordova-plugin-fcm-with-dependecy-updated-app-example.svg)](https://github.com/andrehtissot/cordova-plugin-fcm-with-dependecy-updated-app-example/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/andrehtissot/cordova-plugin-fcm-with-dependecy-updated-app-example.svg)](https://github.com/andrehtissot/cordova-plugin-fcm-with-dependecy-updated-app-example/issues)
[![GitHub forks](https://img.shields.io/github/forks/andrehtissot/cordova-plugin-fcm-with-dependecy-updated-app-example.svg)](https://github.com/andrehtissot/cordova-plugin-fcm-with-dependecy-updated-app-example/network)
[![GitHub stars](https://img.shields.io/github/stars/andrehtissot/cordova-plugin-fcm-with-dependecy-updated-app-example.svg)](https://github.com/andrehtissot/cordova-plugin-fcm-with-dependecy-updated-app-example/stargazers)
[![Known Vulnerabilities](https://snyk.io/test/github/andrehtissot/cordova-plugin-fcm-with-dependecy-updated-app-example/badge.svg?targetFile=app-example/package.json)](https://snyk.io/test/github/andrehtissot/cordova-plugin-fcm-with-dependecy-updated-app-example?targetFile=app-example/package.json)

Simple cordova application using [cordova-plugin-fcm-with-dependecy-updated](https://github.com/andrehtissot/cordova-plugin-fcm-with-dependecy-updated).


### Don't forget:
Make sure that in Android SDK Manager it is installed:
* Android Support Library version 23 or greater
* Android Support Repository version 20 or greater
* Google Play Services version 27 or greater
* Google Repository version 22 or greater

Check the wiki for more.

### Build and Run Steps
1. `git clone https://github.com/andrehtissot/cordova-plugin-fcm-with-dependecy-updated.git`;
2. `cd cordova-plugin-fcm-with-dependecy-updated-app-example`;
2. Download your `google-services.json`, from https://console.firebase.google.com, to the main directory;
4. `cordova run android`;
5. Run it to get the TARGET firebase token:
![alt tag](https://raw.githubusercontent.com/andrehtissot/cordova-plugin-fcm-with-dependecy-updated-app-example/master/.docs/gotToken.jpg)
6. Grab the value of `FB_SERVER_KEY`, that can be found accessing https://console.firebase.google.com, at the configurations section ([step by step tutorial](https://github.com/andrehtissot/cordova-plugin-fcm-with-dependecy-updated-app-example/wiki/How-to-find-your-firebase-server-key));
7. Run:
```bash
FB_SERVER_KEY="your firebase server key" TARGET="the device's firebase token" php tools/notify-both.php
```
8. And look at your device:
![alt tag](https://raw.githubusercontent.com/andrehtissot/cordova-plugin-fcm-with-dependecy-updated-app-example/master/.docs/notificationReceived.jpg)

