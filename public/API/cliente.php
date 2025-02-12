<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");
date_default_timezone_set('America/Santiago');

require_once('models/Connect.php');
require_once('models/class_Cliente.php');
$cliente = new Cliente($CFG);


switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        if ($cliente->get($_REQUEST['id_cliente']) == 1) {
            header("Content-Type: application/json; charset=utf8");
            echo json_encode($cliente->datos);
        };
        break;
    case 'POST':
            if ($cliente->post($_REQUEST) == 1) {
            header("Content-Type: application/json; charset=utf8");
            echo json_encode($cliente->datos);
        };
        
        break;
    case 'PUT':
        echo $cliente->put($_REQUEST);
        break;
    case 'DELETE':
        echo ($cliente->delete($_REQUEST['id_cliente']));
        break;
}

unset($cliente);