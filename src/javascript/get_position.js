import { container, infoContainer, errParagraph, latitudeInput, longitudeInput, btn, apiKey, cityName, temperature, airQuality, AQIcolor, airborneParticulate25, cityNameValue, temperatureValue, pm25Value } from "./dom.js";


function getPosition() {
    btn.addEventListener('click', ()=>{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        }
    });
}