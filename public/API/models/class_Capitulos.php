<?php

// Clase Capitulo
class Capitulo
{
    public $datos;
    private $pdo;

       public function __construct($CFG)
    {
        $this->pdo = new PDO($CFG->dns, $CFG->root, $CFG->password);
    }

    private $post = "INSERT INTO `t_capitulos` (`id_capitulo`, `imagePath`, `capitulo`, `tema`, `competencias`, `descripcion`, `minutos`, `gd`, `color`, `txtcolor`, `urlclase`, `urltest`)  
  VALUES (NULL, ':imagePath', ':capitulo', ':tema', ':competencias', ':descripcion', ':minutos', ':gd', ':color', ':txtcolor', ':urlclase', ':urltest');";
    private $get = "SELECT * FROM `t_capitulos` WHERE `id_capitulo` = :id_capitulo";
    private $put = "UPDATE `t_capitulos` SET `imagePath` = :imagePath, `capitulo` = :capitulo, `tema` = :tema, `competencias` = :competencias, `descripcion` = :descripcion, `minutos` = :minutos, `gd` = :gd, `color` = :color, `txtcolor` = :txtcolor, `urlclase` = :urlclase, `urltest` = :urltest WHERE `id_capitulo` = :id_capitulo";
    private $delete = "DELETE FROM `t_capitulos` WHERE `id_capitulo` = :id_capitulo";

    /**
     * POST
     * ====
     * Create a new Capitulo
     * 
     */
    public function post($datos)
    {
        $cmdSQL = $this->executeSQL($this->post, $datos);
        print_r($cmdSQL);

        $filas_afectadas = $cmdSQL->rowCount();

        if ($filas_afectadas > 0) {
            http_response_code(201); // Creado satisfactoriamente
            return $datos['capitulo'];
        } else {
            http_response_code(500); // Error del servidor interno
            return 0;
        }
    }

    /**
     * GET
     * ====
     * Read Capitulo
     * 
     */

    public function get($id_capitulo)
    {
        $cmdSQL = $this->executeSQL($this->get, ['id_capitulo' => $id_capitulo]);
        $this->datos = $cmdSQL->fetch(PDO::FETCH_ASSOC); // Obtener un solo registro
        return !empty($this->datos);
    }

    /**
     * PUT
     * ====
     * Update a Capitulo
     * 
     */

    public function put($datos)
    {
        $cmdSQL = $this->executeSQL($this->put, $datos);
        $filas_afectadas = $cmdSQL->rowCount();
        if ($filas_afectadas > 0) {
            http_response_code(200); // Actualizado satisfactoriamente
            return $filas_afectadas;
        } else {
            http_response_code(500); // Error del servidor interno
            return 0;
        }
    }

    /**
     * DELETE
     * ====
     * Create a new Capitulo
     * 
     */

    public function delete($id_capitulo)
    {
        $cmdSQL = $this->executeSQL($this->delete, ['id_capitulo' => $id_capitulo]);
        $filas_afectadas = $cmdSQL->rowCount();
        if ($filas_afectadas > 0) {
            http_response_code(200); // Eliminado satisfactoriamente
            return $filas_afectadas;
        } else {
            http_response_code(500); // Error del servidor interno
            return 0;
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
}
