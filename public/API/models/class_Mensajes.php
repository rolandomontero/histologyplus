<?php

class Mensaje
{
    public $datos;
    private $pdo;

    private $get  = "SELECT  DATE_FORMAT(fecha, '%d %b %Y') as `Fecha`, t as Titulo, b as Mensaje, 
                     CASE WHEN topic = 0 THEN 0 ELSE 1 END AS privado 
                     FROM `t_mensajes` WHERE (topic=:id_cliente OR topic=0) AND (fecha >= :ingreso) ORDER BY fecha DESC;";
    private $getall  = "SELECT  DATE_FORMAT(fecha, '%d %b %Y') as `Fecha`, t as Titulo, b as Mensaje, 
                        CASE WHEN topic = 0 THEN 0 ELSE 1 END AS privado 
                        FROM `t_mensajes` ORDER BY fecha DESC;";

    private $post = "INSERT INTO `t_mensajes` (`id_mensajes`, `topic`, `t`, `b`, `fecha`) VALUES (NULL, ':topic', ':t', ':b', ':fecha');";

    private $put = "UPDATE `t_visitas` SET `puntos`= ':puntos', `observacion` = ':observacion'
                    WHERE `t_visitas`.`id_visita` = ':id_visita';";

    public function __construct($CFG)
    {
        $this->pdo = new PDO($CFG->dns, $CFG->root, $CFG->password);
    }

    function __destruct()
    {
        unset($this->datos);
        unset($this->pdo);
    }



    public function get_cliente($id_cliente, $ingreso)
    {
        $cmdSQL = $this->executeSQL($this->get, ['id_cliente'=>$id_cliente, 'ingreso'=>$ingreso]);
        $resultado = $cmdSQL->fetchAll(PDO::FETCH_ASSOC);
    
        if (isset($resultado)) {
            $this->datos = $resultado;
            return 1;
        } else {
            return false;
        }
    }

    public function get_all(){
        $cmdSQL = $this->executeSQL($this->getall,[]);
        $resultado = $cmdSQL->fetchAll(PDO::FETCH_ASSOC);
    
        if (isset($resultado)) {
            $this->datos = $resultado;
            return 1;
        } else {
            return false;
        }
    }
    
    /**
     * POST
     * ====
     * Create a new Puntos
     * 
     */
    public function post($datos)
    {
        $cmdSQL = $this->executeSQL($this->post, $datos);
        $filas_afectadas = $cmdSQL->rowCount();
        if ($filas_afectadas > 0) {
            http_response_code(201); // Creado satisfactoriamente
            return 1;
        } else {
            http_response_code(500); // Error del servidor interno
            return 0;
        }
    }

    public function put($datos)
    {
            $cmdSQL = $this->executeSQL($this->put, $datos);
            $filas_afectadas = $cmdSQL->rowCount();
            if ($filas_afectadas > 0) {
                http_response_code(201); // Creado satisfactoriamente
                return 1;
            } else {
                http_response_code(500); // Error del servidor interno
                return 0;
            } 
    }

    public function delete($id_cliente)
    {
        try {

            $this->executeSQL("DELETE FROM t_visitas WHERE id_visita= :id_visita;", ['id_cliente' => $id_cliente]);
            http_response_code(200);
            return 1;
        } catch (PDOException $e) {
            http_response_code(500);
            echo "Error de conexión: " . $e->getMessage();
        }
    }


    private function executeSQL($sql, $datos)
    {
        if (!empty($datos)) {
            foreach ($datos as $nombreCampo => $valorCampo) {
                $sql = str_replace(":$nombreCampo", $valorCampo, $sql);
            }
        }
        try {
            $cmdSQL = $this->pdo->prepare($sql);
            $cmdSQL->execute();
            return $cmdSQL;
        } catch (PDOException $e) {
            http_response_code(500);
            echo "Error de conexión: " . $e->getMessage() . "\n";
            echo $sql . "\n";
        }
    }
    private function formatDate($date)
    {
        $fecha_unix = strtotime($date);
        return date('d-m-Y', $fecha_unix);
    }
}
