/*$(document).ready(function(){
	$("p").click(function(){
		$(this).hide();
	});
});
*/

$(document).on("ready",principal)
//(document).ready(/*instrucciones*/)




function principal (){
	//intrucciones
	//alert("Documento listo!");

	$('.text').on("click",bienvenida);

}

function bienvenida(){

	$('.hola').html("Hola bienvenid@");
	$('.text').text("Dame click de nuevo!");
	$('.text').on("click",ocultar);
	$('.hola').css("font-weight","bold");
}


function ocultar(){

	$('.text').hide(1000);

}
