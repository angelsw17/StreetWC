<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST["nombre"]);
    $email = htmlspecialchars($_POST["email"]);
    $mensaje = htmlspecialchars($_POST["mensaje"]);

    $destinatario = "workoutcalisthenicsstreet@gmail.com";
    $asunto = "Nuevo mensaje de soporte";
    $contenido = "Nombre: $nombre\nCorreo: $email\nMensaje:\n$mensaje";

    $headers = "From: $email\r\nReply-To: $email\r\n";

    if (mail($destinatario, $asunto, $contenido, $headers)) {
        echo "<script>alert('¡Mensaje enviado correctamente!'); window.location.href='soporte.html';</script>";
    } else {
        echo "<script>alert('Error al enviar el mensaje. Inténtalo de nuevo.'); window.location.href='soporte.html';</script>";
    }
}
?>
