# Weather-App-HW
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="src/styles.css" />
    <title>Weather App</title>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  </head>
  <body>
    <div class="container">
      <div class="weather-app">
        <form class="search-form" id ="search-form"
          <div class="row">
            <div class="col-9">
              <input
                type="search"
                placeholder="Type a city.."
                autofocus="on"
                autocomplete="off"
                class="form-control shadow-sm"
                id="city-input"
              />
            </div>
           
            <div class="col-3">
              <input
                type="submit"
                value="Search"
                class="form-control btn btn-primary shadow-sm"
                 <div class="col-3">
              <input
                type="submit"
                value="Current"
                class="CurrentLocationButton"
              />
            </div>
          </div>
        </form>
         
        <h1 id= "city">
          Park Forest, IL
        </h1>
       
        <ul>
          <li id="date"></li>
          <li>
            Partly Cloudy
          </li>
        </ul>
        <div class="row">
          <div class="col-6">
            <div class="clearfix">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Cloudy icon"
                class="weather-icon float-left"
              />
              <div class="float-left">
                <span class="temperature" id ="temperature">74</span
                ><span class="units" 
              <a href="#" id="fahrenheit-link">°F</a>
              </span>
              </div>
            </div>
          </div>
          <div class="col-6">
            <ul>
              <li>
                Precipitation: 0%
              </li>
              <li>
                Humidity: 77%
              </li>
              <li>
                Wind: 8 km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <script src="src/index.js"></script>
  </body>
</html>
