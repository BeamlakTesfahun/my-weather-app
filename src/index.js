function searchFormFunction(event) {
  event.preventDefault();
  let formInput = document.querySelector("#search-form-input-id");
  let citySelector = document.querySelector("#city-id");
  citySelector.innerHTML = formInput.value;
}
let searchFormSelector = document.querySelector("#search-form-id");
searchFormSelector.addEventListener("submit", searchFormFunction);
