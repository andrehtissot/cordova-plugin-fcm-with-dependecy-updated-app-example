<?php
require __DIR__ . '/notify.inc.php';

notify([
  'notification' => [
    'title' => 'Notification title',
    'body' => 'Notification body',
    "click_action" => "FCM_PLUGIN_ACTIVITY"
  ]
]);
 