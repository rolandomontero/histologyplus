import 'dart:html';
import 'dart:io';
import 'dart:math';
import 'package:flutter/foundation.dart';
import 'package:mailer/mailer.dart';
import 'package:mailer/smtp_server.dart';

void main() {
  // Obtén el formulario por su ID
  final form = querySelector('#greetingForm') as FormElement?;

  // Agrega un listener al evento 'submit' del formulario
  form?.addEventListener('submit', (event) async {
    event.preventDefault(); // Evita que el formulario recargue la página

    // Obtén el valor del campo de texto
    final nameInput = querySelector('#name') as InputElement?;
    final name = nameInput?.value;

    // Verifica si el nombre no está vacío
    if (name != null && name.isNotEmpty) {
      // Limpia cualquier mensaje previo
      document.body?.querySelector('#greetingMessage')?.remove();
      window
          .alert('Hello, $name!'); // Muestra un mensaje emergente con el saludo

      // Añade un nuevo párrafo con el saludo
      document.body?.appendHtml(
        '<p id="greetingMessage" style="font-size: 24px; color: green;">Hello, $name!</p>',
        treeSanitizer: NodeTreeSanitizer.trusted,
      );

      // Configuración del servidor SMTP
      String username = 'app@histologyplus.mclautaro.cl';
      String password = 'Rmx21071972#';
      final smtpServer = SmtpServer('histologyplus.mclautaro.cl',
          username: username, password: password);

      // Crear el mensaje de correo electrónico
      final message = Message()
        ..from = Address(username, 'Your Name')
        ..recipients.add('rolandomontero@hotmail.com')
        ..subject = 'Nuevo saludo'
        ..text = 'Hello, $name!';

      try {
        final sendReport = await send(message, smtpServer);
        print('Message sent: ' + sendReport.toString());
      } on MailerException catch (e) {
        print('Message not sent. \n' + e.toString());
      }
    } else {
      // Si el nombre está vacío, muestra un mensaje de error
      document.body?.appendHtml(
        '<p style="font-size: 18px; color: red;">Please enter your name.</p>',
        treeSanitizer: NodeTreeSanitizer.trusted,
      );
    }
  });
}
