<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");
date_default_timezone_set('America/Santiago');

require_once('models/Connect.php');
require_once('models/class_Capitulos.php');
$capitulo = new Capitulo($CFG);


switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        if ($capitulo->get($_REQUEST['id_capitulo']) == 1) {
            header("Content-Type: application/json; charset=utf8");
            echo json_encode($capitulo->datos);
        };
        break;
    case 'POST':
        echo "INSERTAR";
        if ($capitulo->post($_REQUEST) == 1) {
            header("Content-Type: application/json; charset=utf8");
            echo json_encode($capitulo->datos);
        };
        break;
    case 'PUT':
        echo $capitulo->put($_REQUEST);
        break;
    case 'DELETE':
        echo ($capitulo->delete($_REQUEST['id_capitulo']));
        break;
}

unset($capitulo);
