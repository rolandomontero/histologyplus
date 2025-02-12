<?php

class Cliente
{
    public $id_cliente;
    public $datos;
    public $lista_visitas;
    public $lista_mensajes;
    private $pdo;
    public $error_busqueda = true;

    private $get = "SELECT * FROM `t_clientes` WHERE `id_cliente` = :id_cliente";
    private $post = "INSERT INTO `t_clientes` (`id_cliente`, `nombre`, `correo`, `movil`, `direccion`, `nacimiento`, `observaciones`, `token`, `ingreso`) 
                     VALUES (':id_cliente', ':nombre', ':correo', ':movil', ':direccion', ':nacimiento', ':observaciones', ':token', ':ingreso');";
    private $put = "UPDATE `t_clientes` SET `nombre`= ':nombre', `correo` = ':correo', `movil` = ':movil', `direccion` = ':direccion',
                    `nacimiento` = ':nacimiento', `observaciones` = ':observaciones', `token` = ':token'
                    WHERE `t_clientes`.`id_cliente` = ':id_cliente';";

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
     * Create a new Client
     * 
     */
    public function post($datos)
    {
        $datos['id_cliente'] =  substr($datos['movil'], 1);
        if ($this->get($datos['id_cliente']) != 0) {
            http_response_code(208); // Cliente ya existe, solicitud incorrecta
            return 0;
        } else {
            $cmdSQL = $this->executeSQL($this->post, $datos);
            $filas_afectadas = $cmdSQL->rowCount();
            if ($filas_afectadas > 0) {
                http_response_code(201); // Creado satisfactoriamente
                $id_cliente = $datos['id_cliente'];
                $cmdSQL = $this->executeSQL($this->get, ['id_cliente' => $id_cliente]);
                $resultado = $cmdSQL->fetch(PDO::FETCH_ASSOC);
                $this->datos = $resultado;
                return 1;
            } else {
                http_response_code(500); // Error del servidor interno
                return 0;
            }
        }
    }

    /**
     * GET
     * ===
     * Read a client, by **id_cliente**.
     */
    public function get($id_cliente)
    {
        $cmdSQL = $this->executeSQL($this->get, ['id_cliente' => $id_cliente]);
        $resultado = $cmdSQL->fetch(PDO::FETCH_ASSOC);

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
     * Update a client, by **id_cliente**.
     */
    public function put($datos)
    {
        if ($this->get($datos['id_cliente']) == 1) {

            $cmdSQL = $this->executeSQL($this->put, $datos);
            $filas_afectadas = $cmdSQL->rowCount();
            if ($filas_afectadas > 0) {
                http_response_code(201); // Creado satisfactoriamente
                return 1;
            } else {
                http_response_code(500); // Error del servidor interno
                return 0;
            }
        } else {
            http_response_code(500); // Error del servidor interno
            return 0;
        }
    }

    /**
     * DELETE
     * ===
     * clear a client, by **id_cliente**.
     */
    public function delete($id_cliente)
    {

        try {
            if ($this->get($id_cliente) == 1) {
                $this->executeSQL("DELETE FROM `t_mensajes` WHERE topic = :id_cliente;", ['id_cliente' => $id_cliente]);
                $this->executeSQL("DELETE FROM t_visitas WHERE id_cliente= :id_cliente;", ['id_cliente' => $id_cliente]);
                $this->executeSQL("DELETE FROM `t_clientes` WHERE `t_clientes`.`id_cliente` = :id_cliente;", ['id_cliente' => $id_cliente]);
                http_response_code(200);
                return 1;
            } else {
                http_response_code(400);
                return 0;
            }
        } catch (PDOException $e) {
            http_response_code(500);
            echo "Error de conexi贸n: " . $e->getMessage();
        }
    }

    /**
     * INGRESO
     * ===
     * Obtiene la fecha en que ingreso al Club.
     *
     */

    public function ingreso($id_cliente)
    {
        if ($this->get($id_cliente)) {
            return $this->datos['ingreso'];
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
            echo "Error de conexi贸n: " . $e->getMessage() . "\n";
            echo $sql . "\n";
        }
    }
    private function formatDate($date)
    {
        $fecha_unix = strtotime($date);
        return date('d-m-Y', $fecha_unix);
    }
}
