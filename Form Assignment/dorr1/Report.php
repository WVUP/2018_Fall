switch($dept) {
    case 'RCHS':
       $to = "dpdavis@k12.wv.us";
       break;
    case 'WEMS':
       $to = "dpdavis@k12.wv.us";
       break;
   case 'GEMS':
       $to = "dpdavis@k12.wv.us";
       break;
   case 'SES':
       $to = "dpdavis@k12.wv.us";
       break;
    case 'SMS':
       $to = "dpdavis@k12.wv.us";
       break;
}

$result = mail($to, $title, $message, $headers);