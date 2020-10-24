var apikey = "5a9330ff39aa4d71dda59e8146ab11fd";

var cityName = $("#cityName").val();
console.log(cityName);

var queryURL =
  "https://api.openweathermap.org/data/2.5/weather?q=" +
  cityName +
  "&appid=" +
  apikey;

console.log(queryURL);

$.ajax({
  url: queryURL,
  method: "GET",
}).then(function (response) {
  // Log the queryURL
  console.log(queryURL);

  // Log the resulting object
  console.log(response);

  // // Transfer content to HTML
  $(".city").html("<h1>" + response.name + " Weather Details</h1>");
  $(".wind").text("Wind Speed: " + response.wind.speed);
  $(".humidity").text("Humidity: " + response.main.humidity);

  // // Convert the temp to fahrenheit
  var tempF = (response.main.temp - 273.15) * 1.8 + 32;

  // // add temp content to html
  $(".temp").text("Temperature (K) " + response.main.temp);
  $(".tempF").text("Temperature (F) " + tempF.toFixed(2));

  // // Log the data in the console as well
  console.log("Wind Speed: " + response.wind.speed);
  console.log("Humidity: " + response.main.humidity);
  console.log("Temperature (F): " + tempF);
});
