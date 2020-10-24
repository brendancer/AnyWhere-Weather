var apikey = "5a9330ff39aa4d71dda59e8146ab11fd";
var cityName;
console.log(cityName);

var queryURL =
  "https://api.openweathermap.org/data/2.5/weather?q=" +
  cityName +
  "&appid=" +
  apikey;

console.log(queryURL);

$("#saveCity").click(function () {
  cityName = $("#cityName").val();
  console.log(cityName);
});
$.ajax({
  url: queryURL,
  method: "GET",
}).then(function (response) {
  console.log(response);
});
