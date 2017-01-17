/*
 ********************************
 * Activar y Desactivar Input   *
 * Autor : Aaron Ponce Sandoval *
 ********************************
*/
 $(document).ready(activar);

 	function activar(){
 		$("#profesor_corf1").click(clickCorf1);
 		$("#profesor_corf2").click(clickCorf2);
 		$("#profesor_guia").click(clickGuia);
 		$("#Registrar").click(desactivar);
 	}

 	function clickCorf1(){
 		if($("#profesor_corf1").val()!= "" && $("#otro_corf1").is(":visible")){
 			if($("#otro_corf1").val().length >=0 ){
 			   $("#otro_corf1").val("");
 			   $("#otro_corf1").attr("disabled", "disabled");
 			}
 		}else{
 			$("#otro_corf1").removeAttr("disabled");	
 		}
 		if ($("#profesor_corf1").val() == "") {
 			$("#profesor_corf1").attr("disabled", "disabled");	
 		}	
 	}

 	function clickCorf2(){
 		if($("#profesor_corf2").val()!= "" && $("#otro_corf2").is(":visible")){
 			if ($("#otro_corf2").val().length >= 0) {
 				$("#otro_corf2").val("");
 				$("#otro_corf2").attr("disabled", "disabled");	
 			}
 		}else{
 			$("#otro_corf2").removeAttr("disabled");	
 		}
 		if ($("#profesor_corf2").val() == "") {
 			$("#profesor_corf2").attr("disabled", "disabled");	
 		}	
 	}

 	function clickGuia(){
 		if($("#profesor_guia").val()!= "" && $("#otro_guia").is(":visible")){
 			if($("#otro_guia").val().length >= 0){
	 			$("#otro_guia").val("");
	 			$("#otro_guia").attr("disabled", "disabled");	
 			}	
 		}
 		else{
 			$("#otro_guia").removeAttr("disabled");	
 		}
 		if ($("#profesor_guia").val() == "") {
 			$("#profesor_guia").attr("disabled", "disabled");	
 		}	
 	}

 	function desactivar(){
 		if($("#otro_guia").is(":visible") && $("#profesor_guia").val() == ""){
 			$("#profesor_guia").attr("disabled", "disabled");
 		}
 		if($("#otro_corf2").is(":visible") && $("#profesor_corf1").val() == ""){
 			$("#profesor_corf1").attr("disabled", "disabled");
 		}
 		if($("#otro_corf1").is(":visible") && $("#profesor_corf2").val() == ""){
 			$("#profesor_corf2").attr("disabled", "disabled");
 		}	
 	}