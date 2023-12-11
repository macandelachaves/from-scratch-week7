function refreshWeather(response) {
  let weatherTemperature = document.querySelector("#main-temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;

  weatherTemperature.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "36bb04605e1o2a2f7ce6c8t6fa5fe0ba";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
