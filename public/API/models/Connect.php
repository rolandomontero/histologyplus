<?php
/**
 * Se define la estructura principal de Wampus
 * 
 * @package wampus
 */

unset($CFG);
global $CFG;


$CFG = new stdClass();
$CFG->dns  = 'mysql:dbname=mclautar_wampus;host=localhost;charset=utf8mb4';

try {
    $CFG->password    = 'Rmx21071972#'; 
    $CFG->root        = 'root';
    $pdo = new PDO($CFG->dns, $CFG->root, $CFG->password);
} catch (PDOException $e) {
    $CFG->password    = 'c9Ju90[vPPq5L.';
    $CFG->root        = 'mclautar';
    $pdo = new PDO($CFG->dns, $CFG->root, $CFG->password);
}

