$(document).ready(function(){
  //
  $('.chips-autocomplete').material_chip({
    placeholder: "Filtrar Restaurantes",
    secondaryPlaceholder: ' ',
    autocompleteOptions: {
      data: {
        'Uva': null,
        'Coco': null,
        'Maní': null,
        'Fresa': null,
        'Pera': null,
      },
      limit: Infinity,
      minLength: 1
    }
  });

});

//splash de 2 segundos
$(function(){
   setTimeout(function() {
      $('#splash').fadeOut(500);
   }, 2000);
});
