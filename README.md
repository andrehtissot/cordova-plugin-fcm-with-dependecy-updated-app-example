# cordova-plugin-fcm-with-dependecy-updated-app-example

[![GitHub license](https://img.shields.io/github/license/andrehtissot/cordova-plugin-fcm-with-dependecy-updated-app-example.svg)](https://github.com/andrehtissot/cordova-plugin-fcm-with-dependecy-updated-app-example/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/andrehtissot/cordova-plugin-fcm-with-dependecy-updated-app-example.svg)](https://github.com/andrehtissot/cordova-plugin-fcm-with-dependecy-updated-app-example/issues)
[![GitHub forks](https://img.shields.io/github/forks/andrehtissot/cordova-plugin-fcm-with-dependecy-updated-app-example.svg)](https://github.com/andrehtissot/cordova-plugin-fcm-with-dependecy-updated-app-example/network)
[![GitHub stars](https://img.shields.io/github/stars/andrehtissot/cordova-plugin-fcm-with-dependecy-updated-app-example.svg)](https://github.com/andrehtissot/cordova-plugin-fcm-with-dependecy-updated-app-example/stargazers)
[![Known Vulnerabilities](https://snyk.io//test/github/andrehtissot/cordova-plugin-fcm-with-dependecy-updated-app-example/badge.svg?targetFile=package.json)](https://snyk.io//test/github/andrehtissot/cordova-plugin-fcm-with-dependecy-updated-app-example?targetFile=package.json)
[![DeepScan grade](https://deepscan.io/api/teams/3417/projects/5065/branches/39492/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=3417&pid=5065&bid=39492)

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
5. Grab the value of `FB_SERVER_KEY`, that can be found accessing https://console.firebase.google.com, at the configurations section ([step by step tutorial](https://github.com/andrehtissot/cordova-plugin-fcm-with-dependecy-updated-app-example/wiki/How-to-find-your-firebase-server-key));
6. To define the TARGET, you might use a topic or the device token.
* For all, ios or android devices (`/topics/all`, `/topics/ios`, `/topics/android`). As they are automatically subscribed to those.
* Or grab the firebase token, presented on app start:
![Device Token is presented on device start](https://user-images.githubusercontent.com/1174345/64908538-dfbaa100-d701-11e9-87de-5bf564c14040.png)
7. Run:
```bash
FB_SERVER_KEY="your firebase server key" TARGET="the device's firebase token or topic" php tools/notify-both.php
```
8. And look at your device:
![Device showing notifications](https://user-images.githubusercontent.com/1174345/64908707-e9450880-d703-11e9-802e-9ba20f8a0839.png)


