 $(document).ready(activar);

 	function activar(){
 		$("#profesor_corf1").click(clickCorf1);
 		$("#profesor_corf2").click(clickCorf2);
 		$("#profesor_guia").click(clickGuia);
 	}

 	function clickCorf1(){
 		if($("#profesor_corf1").val()!= "" && $("#otro_corf1").is(":visible")){
 			$("#otro_corf1").attr("disabled", "disabled");	
 		}
 		else{
 			$("#otro_corf1").removeAttr("disabled");	
 		}	
 	}

 	function clickCorf2(){
 		if($("#profesor_corf2").val()!= "" && $("#otro_corf2").is(":visible")){
 			$("#otro_corf2").attr("disabled", "disabled");	
 		}
 		else{
 			$("#otro_corf2").removeAttr("disabled");	
 		}	
 	}

 	function clickGuia(){
 		if($("#profesor_guia").val()!= "" && $("#otro_guia").is(":visible")){
 			$("#otro_guia").attr("disabled", "disabled");	
 		}
 		else{
 			$("#otro_guia").removeAttr("disabled");	
 		}	
 	}
