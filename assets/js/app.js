$(document).ready(function(){

  $('select').material_select();
  //
  // $('.chips-autocomplete').material_chip({
  //   placeholder: "Filtrar Restaurantes",
  //   secondaryPlaceholder: ' ',
  //   autocompleteOptions: {
  //     data: {
  //       'Japonesa': null,
  //       'Thai': null,
  //       'Narnia': null,
  //       'Maxicana': null,
  //       'Italiana': null,
  //       'Rápida': null,
  //     },
  //     limit: Infinity,
  //     minLength: 1
  //   }
  // });

  $('.modal').modal();
});

for (var i = 0; i < restaurants.length; i++) {
  // var restaurantName = restaurants[i].name;
  // console.log(restaurantName);
  var createRestaurants = $("#restaurants").append("<div class='row rastaurant-name'><div class='col s10 offset-s1'><div class='restaurant-food modal-trigger' style='background-image: url(" + 
    restaurants[i].photo + ")' href='#modal" + [i] + "')><h3 class='name'>" + 
    restaurants[i].name + "</h3></div><div id='modal" + 
    [i] + "' class='modal modal-fixed-footer'><div class='modal-content restaurant'><div class='restaurant-logo' id='logo" + 
    [i] + "'></div><h4 class='restaurant-name-title'>" + 
    restaurants[i].name + "</h4><p class='restaurant-info'>" + 
    restaurants[i].description + "</p><p class='food-type'>" + 
    restaurants[i].foodType +"</p><div class='restaurant-photo' style='background-image: url(" + 
    restaurants[i].photo + ")'></div><p class='restaurant-direction-title'>Dirección</p><p class='restaurant-direction'><i class='small material-icons'>location_on</i> " + 
    restaurants[i].location + "</p></div><div class='modal-footer'><a href='#!' class='modal-action modal-close waves-effect btn-flat btn-orange center-align'>Pedir</a></div></div></div></div>"
    );

  // Logo que no sé pq no se ve
  // var hola = $("#logo" + [i]);
  // hola.css("background", "url(" + restaurants[i].logo + ")")
}

// //splash de 2 segundos
// $(function(){
//    setTimeout(function() {
//       $('#splash').fadeOut(500);
//    }, 2000);
// });