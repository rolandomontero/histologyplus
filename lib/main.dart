import 'dart:html';
import 'dart:convert';
import 'package:http/http.dart' as http;

void main() {
  final form = querySelector('#frmContacto') as FormElement?;

  form?.addEventListener('submit', (event) async {
    event.preventDefault();

    final nameInput = querySelector('#nombre') as InputElement?;
    final emailInput = querySelector('#email') as InputElement?;
    final mensajeInput = querySelector('#mensaje') as TextAreaElement?;
    final contactameInput = querySelector('#contactame') as InputElement?;
    final name = nameInput?.value ?? '';
    final email = emailInput?.value ?? '';
    final mensaje = mensajeInput?.value ?? '';
    final contactame = contactameInput?.checked ?? false;

    if (name.isNotEmpty && email.isNotEmpty) {
      //await sendMail(name, email, mensaje, contactame);
    } else {
      window.alert('Por favor, ingrese su nombre y correo electrónico');
    }
  });
}

Future<bool> sendMail(
    String name, String email, String mensaje, bool contactame) async {
  try {
    final url =
        Uri.parse('https://histologyplus.mclautaro.cl/mail.php').replace(
      queryParameters: {
        'asunto': 'Contacto desde Web',
        'nombre': name,
        'email': email,
        'mensaje': mensaje,
        'contactar': contactame ? 'Sí' : 'No',
      },
    );

    final response = await http.get(url);
    print(response.body);
    print(response.statusCode);
    return response.statusCode == 200;
  } catch (e) {
    print(e);
    return false;
  }
}
