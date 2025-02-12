<?php

class Puntos
{
    public $datos;
    private $pdo;

    private $get  = "SELECT  id_visita, DATE_FORMAT(fecha, '%d %b %Y') as `Fecha`, DATE_FORMAT(hora, '%h:%i %p') as `Hora`, `puntos`, `observacion` as `obs`
                     FROM `t_visitas` WHERE (id_usuario=:id_usuario) ORDER BY `t_visitas`.`id_visita` DESC;";
    private $post = "INSERT INTO `t_visitas` (`id_visita`, `id_usuario`, `fecha`, `hora`, `puntos`, `observacion`)  
                     VALUES (NULL, ':id_usuario', ':fecha', ':hora', ':puntos', ':observacion');";

    private $put = "UPDATE `t_visitas` SET `puntos`= ':puntos', `observacion` = ':observacion', `hora` = ':hora', `fecha` = ':fecha'
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
            return $datos['puntos'];
        } else {
            http_response_code(500); // Error del servidor interno
            return 0;
        }
    }

    /**
     * GET
     * ===
     * Read a client, by **id_usuario**.
     */
    public function get($id_usuario)
    {
        $cmdSQL = $this->executeSQL($this->get, ['id_usuario' => $id_usuario]);
        $resultado = $cmdSQL->fetchAll(PDO::FETCH_ASSOC);

        if ($resultado) {
            http_response_code(200);
            $this->datos = $resultado;
            return 1;
        } else {
            http_response_code(204);
            return false;
        }
    }

    /**
     * PUT
     * ===
     * Actualiza los datos, by **id_usuario**.
     */
    public function put($datos)
    {
        $cmdSQL = $this->executeSQL($this->put, $datos);
        $filas_afectadas = $cmdSQL->rowCount();

        if ($filas_afectadas > 0) {
            http_response_code(201); // Creado satisfactoriamente
            return $datos['puntos'];
        } else {
            http_response_code(500); // Error del servidor interno
            return 0;
        }
    }


    /**
     * DELETE
     * ===
     * Delete un dato de visita, by **id_usuario** and **id_visita**.
     */
    public function delete($id_visita)
    {
        try {

            $this->executeSQL("DELETE FROM t_visitas WHERE id_visita= :id_visita;", ['id_visita' => $id_visita]);
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
