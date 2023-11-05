function updateWeatherParameters(response) {
  console.log(response.data);
  let citySelector = document.querySelector("#city-id");
  citySelector.innerHTML = response.data.name;
  let temp = response.data.main.temp;
  let tempSelector = document.querySelector("#temp-id");
  console.log(tempSelector);
  tempSelector.innerHTML = Math.round(temp);
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
cityFunction("Addis Ababa");
