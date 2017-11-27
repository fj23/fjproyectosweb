<!--<script>
    alert("Por favor marque la casilla");
    window.history.go(-1);

</script>-->
<?php
$nombre = $_POST['nombre'];
$mail = $_POST['email'];
$telefono = $_POST['telefono'];
$motivo= $_POST['motivo'];
$mensaje = $_POST['mensaje'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $nombre . ",\r\n";
$mensaje .= "Su e-mail es: " . $mail . " \r\n";
$mensaje .= "Su teléfono es: " . $telefono . "\r\n";
$mensaje .="Motivo del mensaje " . $motivo . "\r\n";
$mensaje .= "Mensaje: " . $_POST['mensaje'] . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = 'fjcalderon2323@gmail.com';
$asunto = 'Contaco FJ ProyectosWeb!';

mail($para, $asunto, utf8_decode($mensaje), $header);

header("Location:gracias.html");
?>


