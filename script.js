var apikey = "5a9330ff39aa4d71dda59e8146ab11fd";
var lon;
var lat;
$("#saveCity").click(function () {
  var cityName = $("#cityName").val();
  console.log(cityName);
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
    console.log(response);

    //find longitude and latitude of city
    var long = response.coord.lon;
    var lat = response.coord.lat;
    console.log(long);

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
      //display city dat
      console.log(response);

      var temp = response.current.temp;
      $("#temp").html("Temperature: " + temp);

      var humid = response.current.humidity;
      $("#humidity").html("Humidity: " + humid);

      var wind = response.current.wind_speed;
      $("#wind-speed").html("Wind Speed: " + wind);

      var uvi = response.current.uvi;
      $("#UV").html("UV index: : " + uvi);
    });
  });
});
