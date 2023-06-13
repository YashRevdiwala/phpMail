<?php

$to = "21amtics187@gmail.com";
$from = "vishvajit.bakrola@utu.ac.in";

$subject = "Suspension Letter";

$message = "<b>Dear Samarth Sheth, <br><br> This is to inform you that you are being terminated from college due to your bad behavior and foul language in class. This decision is not taken promptly, you have already being warned several times because of your misbehavior with students as well as your teachers. Moreover, we have also got complaints about your foul language which you use with your teachers. This kind of behavior is not acceptable for our institution and therefore you have to leave the college immediately so that it sets an example for other students too.</br>";


$header = "From:vishvajit.bakrola@utu.ac.in \r\n";
$header .= "Cc:vishvajit.bakrola@utu.ac.in \r\n";
$header .= "BCC:vishvajit.bakrola@utu.ac.in \r\n";
$header .= "Return-Path: vishvajit.bakrola@utu.ac.in \r\n";
$header .= "Reply-To: vishvajit.bakrola@utu.ac.in \r\n";
$header .= "MIME-Version: 1.0 \r\n";
$header .= "Content-type: text/html \r\n";

$retval = mail($to, $subject, $message, $header);

header("Location: index.php")

?>