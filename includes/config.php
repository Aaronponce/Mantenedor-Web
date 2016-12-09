<?php

/*****************************************
 *  Parseador del Archivo config.ini     *
 *  Este funciona en el directorio local *
 *  Author: Aaron Ponce Sandoval		 *
 *****************************************
*/

$file = "../config/config.ini";
$config = parse_ini_file($file, true);

?>