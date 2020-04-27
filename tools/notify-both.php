<?php
require __DIR__ . '/notify.inc.php';

notify([
  "notification" => [
    "title" => "Notification title",
    "body" => "Notification body",
    "click_action" => "FCM_PLUGIN_ACTIVITY",
    // "android_channel_id" => "sound_alert6"
  ],
  "data" => [
    "param1" => "value1",
    "param2" => "value2"
  ],
]);
