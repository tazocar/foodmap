$(document).ready(function(){

  $('select').material_select();
  $('.modal').modal();

});
// //splash de 2 segundos
$(function(){
   setTimeout(function() {
      $('#splash').fadeOut(1000);
   }, 2000);
});

for (var i = 0; i < restaurants.length; i++) {
  // var restaurantName = restaurants[i].name;
  // console.log(restaurantName);

  //creo restaurantes, les agrego la info del Data
  var createRestaurants = $("#restaurants").append("<div class='row rastaurant-name'><div class='col s10 offset-s1'><div id='restaurant" + 
    [i] + "' class='restaurant-food modal-trigger' style='background-image: url(" + 
    restaurants[i].photo + ")' href='#modal" + [i] + "')><h3 class='name'>" + 
    restaurants[i].name + "</h3></div><div id='modal" + 
    [i] + "' class='modal modal-fixed-footer'><div class='modal-content restaurant'><div class='restaurant-logo' style='background-image: url(" + 
    restaurants[i].logo + ")' id='logo" + 
    [i] + "'></div><h4 class='restaurant-name-title'>" + 
    restaurants[i].name + "</h4><p class='restaurant-info'>" + 
    restaurants[i].description + "</p><p class='food-type'>" + 
    restaurants[i].foodType +"</p><div class='restaurant-photo' style='background-image: url(" + 
    restaurants[i].photo + ")'></div><p class='restaurant-direction-title'>Dirección</p><p class='restaurant-direction'><i class='small material-icons'>location_on</i> " + 
    restaurants[i].location + "</p></div><div class='modal-footer'><a href='#!' class='modal-action modal-close waves-effect btn-flat btn-orange center-align'>Pedir</a></div></div></div></div>"
    );
}

$(".restaurant-food").mouseover(function(){
  $(this).css("background-position", "bottom")
});
$(".restaurant-food").mouseout(function(){
  $(this).css("background-position", "center")
});

$("#filter").on("change", function(){
  var inputValue = $("#filter").val();
  $('.food-type').each(function (index, value){
    var temp = $(this).text();
    // $(this).text()
    if ( temp == inputValue) {
      $(this).parent().parent().parent().parent().show();
    }
    else if (inputValue == "Todas") {
      $(".food-type").parent().parent().parent().parent().show()
    }
    else {
      $(this).parent().parent().parent().parent().hide();
    }
  });
});