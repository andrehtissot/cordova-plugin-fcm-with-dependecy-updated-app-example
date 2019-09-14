<?php

function notify($message) {
  $isWeb = !empty($_REQUEST['target']);

  $serverKey = getenv('FB_SERVER_KEY');
  if(empty($serverKey)) {
      exit("FB_SERVER_KEY env variable should be given.\n");
  }

  if($isWeb) {
    $target = $_REQUEST['target'];
  } else {
    $target = getenv('TARGET');
    if(empty($target)) {
        $errorMessage = <<<EOM
  For the specific device or group, please inform the device token or topic, respectively, as:
  \t- 'TARGET' env variable; or
  \t- 'target' request argument.\n
  EOM;
        exit($errorMessage);
    }
  }

  $now = time();

  $message['to'] = $target;

  $headers = [
    "Authorization:key=$serverKey",
    'Content-Type:application/json'
  ];

  $ch = curl_init();
  curl_setopt($ch,CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
  curl_setopt($ch,CURLOPT_POST, true);
  curl_setopt($ch,CURLOPT_HTTPHEADER, $headers);
  curl_setopt($ch,CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch,CURLOPT_SSL_VERIFYPEER, false);
  curl_setopt($ch,CURLOPT_POSTFIELDS, json_encode($message));
  $result = curl_exec($ch);
  curl_close($ch);
  $result = json_decode($result, true);

  if($isWeb) {
    echo '<pre>';
  }
  echo 'fields:';
  print_r($message);
  echo "\n\nresult:";
  print_r($result);
}