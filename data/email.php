<?php

    $nombres = utf8_decode($_POST["nombres"]);
    $correo = $_POST["email"];
    $empresa = $_POST["empresa"];
    $movil = $_POST["movil"];
    $contenido = utf8_decode($_POST["mensaje"]);
    // $email = $_POST["email"];
    // $mensaje = $_POST[""];

    // $to = "sac@cadillo.pe";
    $to = "ivan@navike21.com";
    $subject = "Nuevo contacto desde la web";

    // compose headers
    $headers = "From: ".$nombres."<".$correo.">\r\n";
    // $headers .= "Reply-To: webmaster@example.com\r\n";
    $headers .= "X-Mailer: PHP/".phpversion();

    // compose message
    $message = "Hola, \n".$nombres." se ha contactado desde la web.\n\n";
    $message .= utf8_decode("Empresa: ").$empresa."\n";
    $message .= utf8_decode("Teléfono: ").$movil."\n";
    $message .= "Mensaje:\n";
    $message .= $contenido;
    // $message .= " Praesent ac augue sed enim aliquam auctor. Ut dignissim ultricies est.";
    // $message .= " Pellentesque convallis tempor tortor. Nullam nec purus.";
    // $message = wordwrap($message, 70);

    // send email
    mail($to, $subject, $message, $headers);

    echo "listo";
?>
