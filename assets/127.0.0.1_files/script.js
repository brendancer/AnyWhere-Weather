$(document).ready(function () {
  console.log("DOCUMENT READY!!!");
  var APIId = "4ddc0164";
  var APIKey = "b272fce0ae48e4cee50f2586bde11a3c";
  var dbURL = "https://api.edamam.com/api/food-database/v2/parser?";

  var foodCount = [0];
  function getFoodData(foods) {
    $("#food-results").empty();

    var getUrl = `${dbURL}ingr=${foods}&app_id=${APIId}&app_key=${APIKey}`;
    $.ajax({
      url: getUrl,
      method: "GET",
    }).then(function (response) {
      console.log("RESPONSE", response);
      $("#food-results").append("<h2>Food Results</h2>");

      response.parsed.forEach(function (foodItem) {
        if (foodItem.food.image != null) {
          $("#food-results").append(
            `<img src=${foodItem.food.image} alt=${foodItem.food.label}/>`
          );
        }
        $("#food-results").append("<h4>Food</h4>");
        $("#food-results").append(`<p>${foodItem.food.label}</p>`);
        $("#food-results").append("<h4>Category</h4>");
        $("#food-results").append(`<p>${foodItem.food.category}</p>`);
        $("#food-results").append("<h4>Carbs</h4>");
        $("#food-results").append(`<p>${foodItem.food.nutrients.CHOCDF}</p>`);
        $("#food-results").append("<h4>Energy</h4>");
        $("#food-results").append(
          `<p>${foodItem.food.nutrients.ENERC_KCAL}</p>`
        );
        $("#food-results").append("<h4>Fat</h4>");
        $("#food-results").append(`<p>${foodItem.food.nutrients.FAT}</p>`);
        $("#food-results").append("<h4>Fiber</h4>");
        $("#food-results").append(`<p>${foodItem.food.nutrients.FIBTG}</p>`);
        $("#food-results").append("<h4>Protein</h4>");
        $("#food-results").append(`<p>${foodItem.food.nutrients.PROCNT}</p>`);
      });
    });
  }
  $("#addIng").on("click", function () {
    var texts = $("<textarea>")
      .addClass("form-control row")
      .attr("type", "text")
      .insertAfter("#food-input" + (foodCount.length - 1));
    texts.attr("id", "food-input" + foodCount.length);
    foodCount.push(foodCount.length);
  });

  $("#clear").on("click", function () {
    $("#food-results").empty();
  });
  $("#submit").on("click", function (event) {
    event.preventDefault();
    for (var i = 0; i < foodCount.length; i++) {
      var foods = $("#food-input0" + foodCount[i]).val();
      console.log(foods);

      getFoodData(foods);
    }
    //EDAMAM SEARCH API CALL

    //constructing the searchQueryURL
    $("#searchBtn").html("Search for Recipes containing " + foods);

    var searchAPIId = "770e1cdd";
    var searchAPIkey = "2543f5d8a60632314acdfd6abc82fcb9";
    var searchQueryURL =
      "https://api.edamam.com/search?q=" +
      foods +
      "&app_id=" +
      searchAPIId +
      "&app_key=" +
      searchAPIkey;
    var searchAPIId = "770e1cdd";
    var searchAPIkey = "2543f5d8a60632314acdfd6abc82fcb9";

    searchQueryURL =
      "https://api.edamam.com/search?q=" +
      foods +
      "&app_id=" +
      searchAPIId +
      "&app_key=" +
      searchAPIkey;
    console.log(searchQueryURL);

    //calling the search query

    $.ajax({
      url: searchQueryURL,
      method: "get",
    }).then(function (response) {
      console.log(response);
      console.log(foods);
      localStorage.setItem("food-choice", JSON.stringify(foods));

      //setting up local storage before the page change
      localStorage.setItem("query", JSON.stringify(response));
    });

    //page change
    $("#searchBtn").on("click", function () {
      var response = JSON.parse(localStorage.getItem("query"));
      var foodChoice = JSON.parse(localStorage.getItem("food-choice"));
      console.log(response);
    });

    if (window.location.pathname == "/project/recipes.html") {
      populateCards(response);
    }

    function populateCards(response) {
      $("#recipeHead").html("Your Recipes Containing: " + foodChoice);
      console.log("hello");

      var cardDeck = [
        "#card-0",
        "#card-1",
        "#card-2",
        "#card-3",
        "#card-4",
        "#card-5",
        "#card-6",
        "#card-7",
        "#card-8",
        "#card-9",
      ];

      for (i = 0; i < 10; i++) {
        var recTitle = response.hits[i].recipe.label;
        var recImg = response.hits[i].recipe.image;
        var recURL = response.hits[i].recipe.url;
        console.log(recTitle);
        console.log(recImg);
        console.log(recURL);
        console.log(cardDeck);

        $(cardDeck[i]);
        $("#recipeTitle-" + [i]).text(recTitle);
        $("#recipeURL-" + [i])
          .html(recURL)
          .attr("href", recURL);
        $("#recipeImg-" + [i]).attr("src", recImg);
      }
    }
  });
});
