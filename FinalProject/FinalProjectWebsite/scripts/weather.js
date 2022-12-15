const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=97c6ac4430ad1cc3a499770e279fee5f';
const temp = document.querySelector("#temp");
const conditions = document.querySelector("#condition");
const weatherIcon = document.querySelector("#weathericon");
const caption = document.querySelector("figcaption");
const humididty = document.querySelector("#humidity");
const divElement = document.querySelector('.weatherBoard');

async function apiFetch() {
    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResult(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

apiFetch();

function capitalize(string){
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

function displayResult(data){
  temp.textContent = data.main.temp;
    conditions.textContent = capitalize(data.weather[0].description);
    caption.textContent = data.weather[0].description;
    humididty.textContent = data.main.humidity;
    weatherIcon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

}