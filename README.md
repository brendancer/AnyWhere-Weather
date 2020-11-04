A Weather Dashboard

In this app, the user enters the name of a city in the search field, then clicks the search button. The Dashboard then displays the current weather conditions in that city, including temperature, humidity, and UV index.Below this info is a 5-day forecast (predicted for 12:00 pm each day) for that city showing showing similar information along with an icon to pictorially represent the general conditions.

Every time a user searches for a city, a button displaying that search information is created underneath the search field. When the user clicks on that button, a new search is executed for that location. Additionally, if the user closes the window or refreshes the browser, the search history buttons remain, and the app will open up with weather results for the last city the user searched for. Finally, clicking the "Clear History" button clears the user's local storage and removes the history buttons from the page.
This Progject was created according to the following requirements:

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city.

Technologies Used

*Html
*Javascript
*JQuery
*Bootstrap
*Moment API
*OpenWeatherMap API




