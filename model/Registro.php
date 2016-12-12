<?php
 
/*********************************
* Clase Registro 
*/

class Registro 
{

	private $id;
	private $publicada;
	private $fecha;
	private $ingreso;
	private $nombre;
	private $email;
	private $carrera;
	private $men_principal;
	private $prf_guia;
	private $prf_cor1;
	private $prf_cor2;
	private $titulo;
	private $resumen;
	
	private $config;

	private $FILE_NAME;
	private $FILE_DATA;
	private $FILE_TYPE;	
	
	function __construct($id, $publicada, $fecha, $ingreso, $nombre, $nombre, $email, $carrera, $men_principal, $prf_guia, $prf_cor1, $prf_cor2, $titulo, $resumen){
			
			$this->id = $id;
			$this->publicada = $publicada;
			$this->fecha = $fecha;
			$this->ingreso = $ingreso;
			$this->nombre = $nombre;
			$this->email = $email;
			$this->carrera = $carrera;
			$this->men_principal = $men_principal;
			$this->prf_guia = $prf_guia;
			$this->prf_cor1 = $prf_cor1;
			$this->prf_cor2 = $prf_cor2;
			$this->titulo = $titulo;
			$this->resumen = $resumen;

			include("../includes/config.php");
			$this->config = $config;
	}

	public function buscar(){
		return $buscar = "SELECT * FROM ".$this->config['conexion']['tabla']." WHERE(nombre='$this->nombre')";
		}

	public function agregar(){
		return $agregar = "INSERT INTO ".$this->config['conexion']['tabla']." (id,publicada,fecha,nombre,email,carrera,men_principal,prf_guia,prf_cor1,prf_cor2,titulo,resumen,FILE_NAME, FILE_DATA, FILE_TYPE) value ('$this->id','$this->publicada','$this->fecha','$this->nombre','$this->email','$this->carrera','$this->men_principal','$this->prf_guia','$this->prf_cor1','$this->prf_cor2','$this->titulo','$this->resumen','$this->FILE_NAME','$this->FILE_DATA','$this->FILE_TYPE')";
	}

	public function modificar(){
		return $modificar = "UPDATE ".$this->config['conexion']['tabla']." set id='$this->id', publicada='$this->publicada', fecha='$this->fecha', nombre='$this->nombre',email='$this->email', carrera='$this->carrera', men_principal='$this->men_principal',  prf_guia='$this->prf_guia', prf_cor1='$this->prf_cor1', prf_cor2='$this->prf_cor2', titulo='$this->titulo', resumen=$this->resumen, FILE_NAME='$this->FILE_NAME', FILE_DATA='$this->FILE_DATA', FILE_TYPE='$this->FILE_TYPE' WHERE(id='$this->id')";
	}

	public function eliminar(){
		return $eliminar = "DELETE FROM ".$this->config['conexion']['tabla']." WHERE(nombre='$this->nombre')";
	}
}
?>	