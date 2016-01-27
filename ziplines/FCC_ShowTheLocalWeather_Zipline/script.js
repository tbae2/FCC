$(document).ready(function() {
  var unitSwitch = 1;
  var apiKey = "79b5a155d75e1da7738bb644407d73cb";

  //acquire the current weather from openweathermap
  currentLoc();
  //currentWeather(null,null);
  function currentLoc(units) {
    var whatUnit = units;
    console.log(whatUnit);
    if (navigator.geolocation) {
      var location = null;
      navigator.geolocation.getCurrentPosition(
        function(position) {
          currentWeather(position.coords.latitude, position.coords.longitude, whatUnit);
        })
    }
  };

  function currentWeather(lat, long, unit) {
    var degreeType = "";
    var windSpeed = "";
    var unitChoice = "";
    if (unit === "imperial" || unit === undefined) {
      degreeType = "F";
      windSpeed = "MPH";
      unitChoice = "imperial";
    } else {
      degreeType = "C";
      windSpeed = "M/S";
      unitChoice = "metric";
    }

    var apiURL = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&units=" + unitChoice + "&APPID=" + apiKey;
    console.log(apiURL);

    $.get(apiURL, function(weather) {
      //$(".testAPI").html("weather test:" + JSON.stringify(weather));
      $(".currentTemp").html("Current Temp" + "<br>" + Math.floor(weather.main.temp) + " " + degreeType);
      $(".currentWeather").html("Current Weather" + "<br>" + weather.weather[0].main + "<br>" + "<img src=http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png>");
      $(".weatherLocation").html("Location" + "<br>" + weather.name);
      $(".weatherSky").html("Humidity" + "<br>" + weather.main.humidity + "%");
      $(".weatherWind").html("Wind" + "<br>" + Math.floor(weather.wind.speed) + " " + windSpeed);

    })
  }

  $(".convert").click(function() {
    if (unitSwitch === 0) {
      currentLoc("imperial");
      unitSwitch = 1;
    } else {
      currentLoc("metric");
      unitSwitch = 0;
    }
  })

});