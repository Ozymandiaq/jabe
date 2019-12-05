<?php
require 'PHPMailerAutoload.php';
$mail = new PHPMailer;
$mail->isSMTP();
$mail->CharSet = 'UTF-8';
$mail->Host = 'smtp.gmail.com';
$mail->Port = 587;
$mail->SMTPOptions = array (
    'ssl' => array(
        'verify_peer'  => false,
        'verify_peer_name'  => false,
        'allow_self_signed' => true));
$mail->SMTPAuth = true;
$mail->Username = "myyyrobot@gmail.com";
$mail->Password = "abzalken1993";
$mail->setFrom('tursunbek.s@maint.kz', 'Test'); // название
$mail->addAddress('tursunbek.s@maint.kz', 'Test');
$mail->isHTML(true);
$mail->Subject  = "Test";
$mail->Body    = "<html>
    <head>
        <meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>
    </head>
    <body>
        Имя: <b>".$_POST['name']."</b><br/>
        Телефон: <b>".$_POST['phone']."</b><br/>
    </body>
    </html>";
$mail->AltBody = 'This is a plain-text message body';
echo "Спасибо. Ожидайте звонка.";
if (!$mail->send()) {
    exit("Mailer Error: " . $mail->ErrorInfo);
}
?>



