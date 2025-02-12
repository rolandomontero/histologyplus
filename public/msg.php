<?php
$nombre = $_REQUEST['nombre'];
$email = $_REQUEST['email'];
$codigo = $_REQUEST['codigo'];


$mensaje  = "<img src='https://histologyplus.mclautaro.cl/img/eicon.png' width='128' height='128'/><p><b>Histology Plus</p></b><br>";
$mensaje  .=  "<h1>Hola!, $nombre</h1>"; 
$mensaje  .=  "<p>Introduce el código manualmente en la aplicación. Aquí está el código:</p>";
$mensaje  .=  "<h2>$codigo</h2>";

$header  = "From: <info@mclautaro.cl>\r\n";
$header .= "MIME-Version: 1.0\r\n";
$header .= "Content-type: text/html; charset=UTF-8\r\n";

if (mail($email, "Código de Confirmación: $codigo", $mensaje, $header)) {
    echo "Correo enviado a: $email";
    echo $mensaje;
    echo $header;
} else {
    echo "Error al enviar el correo.";
    error_log("Error al enviar el correo a $email con el mensaje: $mensaje y los encabezados: $header");
}
?>
