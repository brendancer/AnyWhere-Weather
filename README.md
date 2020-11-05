###A Weather Dashboard             [![favicon.png](https://i.postimg.cc/zDSDmZMT/favicon.png)](https://postimg.cc/MXHJR4zG)



See the app live at: https://brendancer.github.io/weather-dashboard-goodwin/



In this app, the user enters the name of a city in the search field, then clicks the search button. The Dashboard then displays the current weather conditions in that city, including temperature, humidity, and UV index.Below this info is a 5-day forecast (predicted for 12:00 pm each day) for that city showing showing similar information along with an icon to pictorially represent the general conditions.

Each city search is saved. Buttons that contain the name of the cities in the search history are created as new cities are searched. Any previous city (up to 8) may be retrieved by pushing the button, and current conditions and a forcast will be displayed. The last 8 cities will be stored in local storage so that after the user saves a new city, they may access their previous searches. Finally, clicking the "Clear History" button clears the user's local storage and removes the history buttons from the page.
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
*in-line css
*Moment API
*OpenWeatherMap API
*HTML Color Codes (color picker)

Future Development:

The searches would be more accurate if they included a city and state, since there are many duplicate city names around the world.

There should be some sort of error message if the selected city is not in the database (or automatically display the nearest city that is in the database)

An hourly forcast for the current day, along with morning and evening forcasts for the next 5 days, would improve the usefulness of this app.

Links:
*Moment.js 
-Date Formatting  
--https://momentjs.com/
*OpenWeatherMap 
-weather information  
--https://openweathermap.org/
*HTML Color Codes 
-color picker 
--https://html-color-codes.info/colors-from-image/#
*Flaticons.com
-weathervane favicon
--Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>






