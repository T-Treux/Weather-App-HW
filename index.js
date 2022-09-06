function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = currentTime.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayindex = currentTime.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return `${days[dayindex]} ${hours}:${minutes}`;
}

function search(event) {
  event.preventDefault();

  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function converttoFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let temperature = temperatureElement.innerHTML;
  temperatureElement.innerHTML = Math.round((temperature * 9) / 5 + 32);
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();

dateElement.innerHTML = formatDate(currentTime);

function retrievePosition(position) {
  console.log(position);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
  let apiKey = "c95d60a1e3adbeb286133f1ebebc2579";
  let apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=${city-input}&appid=${'apiKey'}";
  axios.get(apiUrl).then(showTemperature);
}

let searchInput = document.querySelector("#searchForm");
searchInput.addEventListener("submit", handleSubmit);

function getlatlongTemp(event) {
  event.preventDefault();
  let latlongTemp = document.querySelector(".currentLocationButton");
  latlongTemp.addEventListener("click", getlatlongTemp);
}
let apiKey = "c95d60a1e3adbeb286133f1ebebc2579";
let lat = position.coords.latitude;
let lon = position.coords.longitude;
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${'apiKey'}";
axios.get(apiUrl).then(getlatlongTemp);
