$(document).on("ready",enviar);


function enviar(){
	$("#envio").on("click",datos);
}

function datos(){
	mesa = $('#mesa').val();
	personas = $('#personas').val();

	document.getElementById("pedido").innerHTML = "<h4>Resumen de pedido</h4><br>"+ "El numero de mesa es "+mesa+"<br>El numero de personas es: "+personas ;



}
