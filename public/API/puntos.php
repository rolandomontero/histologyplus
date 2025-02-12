<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");
date_default_timezone_set('America/Santiago');

require_once('models/Connect.php');
require_once('models/class_Puntos.php');

$puntos = new Puntos($CFG);


// Utiliza el método adecuado del verbo HTTP
switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        // Simplifica la condición y la respuesta
        if ($puntos->get($_REQUEST['id_cliente'])) {
            header("Content-Type: application/json; charset=utf8");
            echo json_encode($puntos->datos);
        } else {
            // Manejar el caso en que no se encuentren datos
            http_response_code(404);
            echo json_encode(['error' => 'No se encontraron datos']);
        }
        break;
    case 'POST':
        // Devuelve la respuesta del método post
        echo $puntos->post($_REQUEST);
        break;
    case 'PUT':
        // Devuelve la respuesta del método put
        echo $puntos->put($_REQUEST);
        break;
    case 'DELETE':
        // Devuelve la respuesta del método delete
        echo $puntos->delete($_REQUEST['id_visita']);
        break;
    default:
        // Manejar métodos HTTP no permitidos
        http_response_code(405);
        echo json_encode(['error' => 'Método no permitido']);
}

// No es necesario usar unset, PHP se encarga de la limpieza


unset($puntos);