var apikey = "5a9330ff39aa4d71dda59e8146ab11fd";
var long;
var lat;
var newButton;
let searchHistory = JSON.parse(localStorage.getItem("city")) || [];
console.log(searchHistory);

function clearCities() {
  localStorage.clear();
  searchHistory = [];
  console.log(searchHistory);
  location.reload();
}

$("#cityName").keypress(function () {
  $("#saveCity").attr("disabled", false);
});

//obtaining the city input
$("#saveCity").click(function () {
  var cityName = $("#cityName").val();
  event.preventDefault();
  historyButtons();
  $("#cityName").val("");
  $("#saveCity").attr("disabled", true);

  //saving cityName to local storage
  $("#previousCity").html(cityName);
  searchHistory.unshift(cityName);
  searchHistory.length = 8;
  console.log(searchHistory);
  localStorage.setItem("city", JSON.stringify(searchHistory));

  //rendering search history buttons
  function historyButtons() {
    $("#buttonGroup").empty();

    for (var i = 0; i < searchHistory.length; i++) {
      var newButton = $("<button class='btn btn-outline-secondary'>");
      var previousCity = searchHistory[i];
      if (previousCity != null) {
        console.log(cityName);
        newButton.attr("data-name", searchHistory[i]);
        newButton.text(previousCity);
        newButton.addClass("oldCityBtn");
        newButton.css("background-color", "#EBD5E1");
        $("#buttonGroup").append(newButton);
      }
    }
  }

  //calling "current weather data" api to get longitude and latitude
  function getWeatherData() {
    var queryURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apikey +
      "&units=imperial";

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      //find longitude and latitude of city
      var long = response.coord.lon;
      var lat = response.coord.lat;

      //add city name to city data box
      var nameCity = response.name;
      $("#nameCity").html(nameCity);

      //add date
      var date = moment().format("LL");
      $("#currentDay").html(date);

      //Switch to one call to obtain results including uv index and forcast
      var query1URL =
        "https://api.openweathermap.org/data/2.5/onecall?lat=" +
        lat +
        "&lon=" +
        long +
        "&appid=" +
        apikey +
        "&units=imperial";

      $.ajax({
        url: query1URL,
        method: "GET",
      }).then(function (response) {
        //display city data
        console.log(response);

        var cityIconCode = response.current.weather[0].icon;
        var iconURL =
          "http://openweathermap.org/img/wn/" + cityIconCode + "@2x.png";

        $("#icon").html("<img src=' " + iconURL + "'>");

        var cond = response.current.weather[0].description;
        $("#condition").html(cond);

        var temp = Math.round(response.current.temp);
        $("#temp").html("Temperature: " + temp + "°F");

        var humid = response.current.humidity;
        $("#humidity").html("Humidity: " + humid + "%");

        var wind = response.current.wind_speed;
        $("#wind-speed").html("Wind Speed: " + wind + "mph");

        var uvi = response.current.uvi;
        $("#UV").html("UV index: : " + uvi);

        //5 day forcast

        //adding date to forcast cards
        var forcast_1 = moment().add(1, "days").format("L");
        var forcast_2 = moment().add(2, "days").format("L");
        var forcast_3 = moment().add(3, "days").format("L");
        var forcast_4 = moment().add(4, "days").format("L");
        var forcast_5 = moment().add(5, "days").format("L");

        $("#forcast-1").html(forcast_1);
        $("#forcast-2").html(forcast_2);
        $("#forcast-3").html(forcast_3);
        $("#forcast-4").html(forcast_4);
        $("#forcast-5").html(forcast_5);

        for (i = 1; i < 6; i++) {
          //getting and displaying the icon to forcast cards

          var iconCode = response.daily[i].weather[0].icon;
          var iconURL =
            "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";

          $("#icon" + [i]).html("<img src=' " + iconURL + "'>");

          //adding the rest of the forcast weather data to cards
          var cardCondition = response.daily[i].weather[0].description;
          var cardHigh = Math.round(response.daily[i].temp.max);
          var cardLow = Math.round(response.daily[i].temp.min);
          var cardHumid = response.daily[i].humidity;

          $("#forcastCondition" + [i]).html(cardCondition);
          $("#forcastHigh" + [i]).html("High: " + cardHigh + "°F");
          $("#forcastLow" + [i]).html("Low: " + cardLow + "°F");
          $("#forcastHumid" + [i]).html("Humidity: " + cardHumid + "%");
        }
      });
    });
  }
  getWeatherData();

  $(".oldCityBtn").on("click", function () {
    var oldCity = $(this).text();
    console.log(oldCity);
    cityName = oldCity;
    getWeatherData();
  });
});
