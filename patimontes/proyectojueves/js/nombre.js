$(document).on("ready",principal)

	
	var enviar = $("#enviar");
	var tunombre = $('#tunombre');


	function principal(){

		enviar.on('click',nombre);

	}

	function nombre(){

	var nombre = $("#nombre").val();
	tunombre.html("Bienvenid@ " + nombre);
}