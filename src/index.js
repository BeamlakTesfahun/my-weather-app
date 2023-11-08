let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dateTimeSelector = document.querySelector("#date-time");
let day = now.getDay();
let hour = now.getHours();
let min = now.getMinutes();
if (hour < 10) {
  hour = "0" + hour;
}
if (min < 10) {
  min = "0" + min;
}
dateTimeSelector.innerHTML = `${days[day]} ${hour}:${min}`;

function updateWeatherParameters(response) {
  console.log(response.data);
  let citySelector = document.querySelector("#city-id");
  citySelector.innerHTML = response.data.name;
  let temp = response.data.main.temp;
  let tempSelector = document.querySelector("#temp-id");
  console.log(tempSelector);
  tempSelector.innerHTML = Math.round(temp);
  let humSelector = document.querySelector("#humidity-id");
  let windSpeedSelector = document.querySelector("#speed-id");
  let decriptionSeelctor = document.querySelector("#description-id");
  console.log(decriptionSeelctor);
  humSelector.innerHTML = response.data.main.humidity;
  windSpeedSelector.innerHTML = Math.round(response.data.wind.speed);
  decriptionSeelctor.innerHTML = response.data.weather[0].description;
  let iconSelector = document.querySelector("#icon");
  var iconCode = response.data.weather[0].icon;
  //var iconUrl = "https://openweathermap.org/img/wn/" + iconCode + ".png";
  iconSelector.innerHTML = `<img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" class="weather-app-emoji" />`;
  getForecast(response.data.name);
}
function cityFunction(city) {
  let apiKey = "63f6b7ca37c5806f98b038dfd37c0251";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(updateWeatherParameters);
}
function searchFormFunction(event) {
  event.preventDefault();
  let formInput = document.querySelector("#search-form-input-id");

  cityFunction(formInput.value);
}
let searchFormSelector = document.querySelector("#search-form-id");
searchFormSelector.addEventListener("submit", searchFormFunction);
function displayForecast(response) {
  console.log(response.data);
  let forecastSelector = document.querySelector("#forecast-id");
  let days = ["Tue", "Wed", "Thur", "Fri", "Sat"];
  let forecastHtml = "";
  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `
      <div class="weather-forecast-day">
        <div class="weather-forecast-date">${day}</div>
        <div class="weather-forecast-icon">🌤️</div>
        <div class="weather-forecast-temperatures">
          <span class="weather-forecast-temperature">
            <strong>15º</strong>
          </span>
          <span class="weather-forecast-temperature">9º</span>
        </div>
      </div>
    `;
  });
  forecastSelector.innerHTML = forecastHtml;
}
function getForecast(city) {
  let apiKey = "dct7a833c24072f2b20aa7d41dobe337";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios(apiUrl).then(displayForecast);
}

cityFunction("Addis Ababa");
//displayForecast();
