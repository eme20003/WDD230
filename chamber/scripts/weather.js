const temp = document.querySelector("#temperature");
const conditions = document.querySelector("#condition");
const weatherIcon = document.querySelector("#weatherIcon");
const wSpeed = document.querySelector("#windSpeed");
const wChill = document.querySelector("#windChill");
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Raleigh&units=imperial&appid=97c6ac4430ad1cc3a499770e279fee5f';

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
    weatherIcon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    wSpeed.textContent = data.wind.speed;
    wChill.textContent = "N/A";
}