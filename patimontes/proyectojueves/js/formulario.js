$(document).on("ready",enviar);

var usuario= "mail@gmail.com";
var pswd= "123";



function enviar(){
	$("#envio").on("click",login);
}

function login(){
	correo = $('#usuario').val();
	contra = $('#pass').val();



	if (correo==usuario&&contra==pswd) {
		alert("Inicio de sesion exitoso!");
		window.location.href = 'http://www.google.com';
	} else {
		alert("Tu contraseña y/o contraseña incorrectos");
	};

}