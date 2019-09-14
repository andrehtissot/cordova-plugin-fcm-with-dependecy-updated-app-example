<?php
require __DIR__ . '/notify.inc.php';

notify([
  "notification" => [
    "title" => "Notification title",
    "body" => "Notification body",
    "sound" => "default",
    "click_action" => "FCM_PLUGIN_ACTIVITY",
    "icon" => "fcm_push_icon"
  ],
  "data" => [
    "param1" => "value1",
    "param2" => "value2"
  ],
]);
