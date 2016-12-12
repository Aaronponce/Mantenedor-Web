<?php

require_once ('../model/Conexion.php');
require_once ('../model/Registro.php');
require_once ('../includes/select.php');
require_once ('../includes/config.php');

$id = "";
$publicada = "21/56/89";
$fecha = "21/56/89";
$ingreso = "21/56/89";
$nombre = "aaron";
$email = "as@gmail";
$carrera = "civil";
$men_principal = "mencion";
$prf_guia = "profe guia";
$prf_cor1 = "core1";
$prf_cor2 = "core2";
$titulo = "titulo";
$resumen = "resumen";

//$Conexion = new Conexion();
//$Registro = new Registro($id, $publicada, $fecha, $ingreso, $nombre, $nombre, $email, $carrera, $men_principal, $prf_guia, $prf_cor1, $prf_cor2, $titulo, $resumen);

//$Conexion->consulta($Registro->agregar());


selected($config['profesores'],"prf_guia", "Profesor Guia");
selected($config['carreras'],"carrera", "carrera");
?>