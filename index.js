var cardContainer =$('.card-Container');
var submit =$('.submit-Button');

submit.on("click", addFacts);

function addFacts(){
  var name = $('.name').val();
  var favoriteAnimal = $('.favorite-Animal').val();
  var favoriteColor = $('.favorite-Color').val();
  var favoriteFood = $('.favorite-Food').val();

  cardContainer.append(`<p class = "addFacts"> ${name} your favorite animal is a ${favoriteAnimal}, your favorite color is ${favoriteColor}, and your favorite food is ${favoriteFood}.</p>`);

  $(`.name`).val("");
  $(`.favorite-Animal`).val("");
  $(`.favorite-Color`).val("");
  $(`.favorite-Food`).val("");

  
}
