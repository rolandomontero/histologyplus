<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
date_default_timezone_set('America/Santiago');
require_once('models/Connect.php');
require_once('models/class_Cliente.php');
require_once('models/class_Mensajes.php');
$cliente = new Cliente($CFG);
$mensaje = new Mensaje($CFG);


switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        if (!empty($_REQUEST)) {
            $id_cliente = $_REQUEST['id_cliente'];
            if ($cliente->get($id_cliente) == 1) {
                if ($mensaje->get_cliente($id_cliente, $cliente->ingreso($id_cliente))) {
                    header("Content-Type: application/json; charset=utf8");
                    echo json_encode($mensaje->datos, JSON_UNESCAPED_UNICODE);
                }
            } else {
                if ($mensaje->get_all()) {
                    header("Content-Type: application/json; charset=utf8");
                    echo json_encode($mensaje->datos, JSON_UNESCAPED_UNICODE);
                }
            }
        } else {
            if ($mensaje->get_all()) {
                header("Content-Type: application/json; charset=utf8");
                echo json_encode($mensaje->datos, JSON_UNESCAPED_UNICODE);
            }
        };

        break;
    case 'POST':
        $_POST = json_decode(file_get_contents('php://input'), true);
        echo "INSERTAR";
        break;
    case 'PUT':
        echo "ACTUALIZAR";
        break;
    case 'DELETE':
        echo "BORRAR";
        break;
}
