$(document).on("ready",enviar);

document.getElementById("resultado").style.visibility="hidden";

function enviar(){
	$("#envio").on("click",datos);
}

function datos(){
	mesa = $('#mesa').val();
	personas = $('#personas').val();
	
	$('#pedido').toggle(800);

	var ensaladas = new Array();
	//recorremos todos los checkbox seleccionados con .each
	$('input[name="ensalada[]"]:checked').each(function() {
		//$(this).val() es el valor del checkbox correspondiente
		ensaladas.push($(this).val());
	})

	var sandwich = new Array();
	$('input[name="sandwich[]"]:checked').each(function() {
		sandwich.push($(this).val());
	})

	var bebida = new Array();
	$('input[name="bebida[]"]:checked').each(function() {
		bebida.push($(this).val());
	})
	

	document.getElementById("resultado").style.visibility="initial";

	document.getElementById("resumen").innerHTML = "El numero de mesa es "+mesa+"<br>El numero de personas es: "
	+personas +"<br>Han pedido las siguientes ensaladas: "+ ensaladas + "<br> Han pedido los sandwiches: " +
	sandwich + "<br> Han pedido las siguientes bebidas: " +bebida ;
	
	
}
