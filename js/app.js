$(document).ready(function(){

// splash

$('#first-seccion').hide(); //aquí se va a ocultar toda la primera sección
  setTimeout(function() { //mientras ocurre esta función
    $('#splash').fadeOut(500);
    $('#first-seccion').show(); // y al finalizar se van a mostrar
  }, 3000); //tiempo


});

// validar telefono
$("#phone-input").keyup(validatePhone);

  function validatePhone () {
    if($("#phone-input").val().trim().length > 0 && $("#phone-input").val().trim().length == 10) {
      console.log("Viridiana");
      $("#next-view").removeAttr("disabled");
    } else {
      $("#next-view").attr("disabled" , true);
    }
  };

  // var $inputPhone = $('#phone-input');
  var $button = $('#next-view');
// cambiar a vista randomCode

  $button.click(function(){
    if ($button.attr({disabled:false})) {
      href: '../views/randomCode.html'
    }

});


// generar número aleatorio
var array = [];
function myFunction (){
  var x = Math.floor((Math.random()*10));
  array.push(x);
  return x
}

function codeRandom () {
  var codigo = ""
  for (var i=0; i<3; i++){
    codigo += myFunction();
  }

$("#randomCode").text(codigo);

}
codeRandom();
