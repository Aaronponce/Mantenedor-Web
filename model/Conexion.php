<?php
/*
 ********************************
 * Conexion a la Base de datos  *
 * Autor : Aaron Ponce Sandoval *
 ********************************
*/

error_reporting(E_ALL ^ E_NOTICE);

class Conexion {

	private $conexion;
	private $servidor;
	private $usuario;
	private $password;
	private $base_de_datos;

	public function __construct(){
		include("../includes/config.php");
		$this->conexion = new mysqli($config['conexion']['servidor'], $config['conexion']['usuario'], $config['conexion']['password'], $config['conexion']['base_de_datos']);

		if(!$this->conexion){
			printf("Fallo la conexion:\n");
		}
	}

	public function consulta($datos){
		$result = $this->conexion->query($datos);
		if(!$result)
			printf("Fallo la consulta: %s\n", $this->conexion->error);
		return $result;

	}

	public function free($datos){
		$result = $this->conexion->free($datos);
		if(!$result)
			printf("Fallo la liberacion: %s\n", $this->conexion->error);
		return $result;

	}

	public function arreglo($datos){
		$result = $this->conexion->fetch_array($datos);
		if(!$result)
			printf("Fallo la fetch_array: %s\n", $this->conexion->error);
		return $result;
	}

	public function cerrar(){
		$result = $this->conexion->close();
		if(!$result)
			printf("Fallo el cierre de conexion: %s\n", $this->conexion->error);
		return $result;
	}
}
?>
