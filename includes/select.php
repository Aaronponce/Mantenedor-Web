<?php

/* Funcion Select
 * @brief Funcion creadora de Select dinamicos
 * @param arreglo: Arreglo que contienen el cuerpo del Select
 * @param nom_select: Nombre del Select pata _POST
 * @param select_disable: Nombre del select de presentacion 
*/ 

function selected($arreglo,$nom_select,$select_disable){ 
	echo "<select class=form-control name=".$nom_select." required>";
	echo "<option selected disabled>"; echo $select_disable; echo "</option>";
			foreach ($arreglo as $key => $profesor){
				echo "<option>"; echo $profesor ."";;echo "</option>";
			}
	echo "</select>";
}

?>