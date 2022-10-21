

let temperature = document.getElementById("temperature");
let windSpeed = document.getElementById("windSpeed");
let btn = document.getElementById("windSpeedButton");
let windChillHtml = document.querySelector(".weather");

btn.addEventListener('click', () => {
    let windChillChecker = document.querySelector("#windChillTotal");
    
    let windChill = () => {
    let temperatureInput = temperature.value;
    let windSpeedInput = windSpeed.value;

    let firstPart = 35.74 + .6215 * temperatureInput;
    let secondPart = 35.75 * windSpeedInput;
    let thridPart = .4275 * (temperatureInput * windSpeedInput);

    let secondPartTotal = Math.pow(secondPart, .16);
    let thridPartTotal = Math.pow(thridPart, .16);

    let total = Math.round((firstPart - secondPartTotal + thridPartTotal));

    let divItem = document.createElement('div');
    divItem.setAttribute("id", 'windChillTotal');
    let pItem = document.createElement('p');
    pItem.textContent = "Wind Chill = " + total;

    divItem.appendChild(pItem);

    windChillHtml.appendChild(divItem);
    }

    if (windChillChecker){
        windChillChecker.remove();

        windChill();
    }else{
        windChill();
    }

});