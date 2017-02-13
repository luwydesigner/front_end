


/*Válida los números ingresados*/
$(function(){
	/*Restringir a solo números*/
	$('#numero_entero').keyup(function (){
		this.value = (this.value + '').replace(/[^0-9]/g, '');
	});

	/*Procesar Número*/
	$('#btn_enviar').click(function(event){
		var $numero = $("#numero_entero").val();
		event.preventDefault();
		var validar = true;
		/*Validar que no se Repita*/
		$("#numeros li").each(function(){
				if ($numero <1 ){
					alert("Escriba un número entero mayor a 0");
					validar = false;
              				return false;
				}
       		    	if ($(this).text() == $numero){
       		    		alert("El número se repite, Digite otro");
       		    		$($numero).focus();
       		    		validar = false;
              				return false;
       		    	}
	      });
	       // Si es verdadero agregar Número
	      if(validar === true) {
	      		$('ul#numeros').append("<li>" + $numero + "</li>");
	      		return false;
		}
	});
});


/*Ordenar Números Asc*/
$(function(){
	$("#btn-asc").click(function(){
		$("#numeros li").animate({
			    borderWidth: "2px"
		  }, 0 ).sortMe("number", {reverse: false});
	});
});



/*Reiniciar Valores*/
$(document).ready(function(){
	$("#btn-reiniciar").click(function(){
		$('#numeros li').remove();
	});
});









