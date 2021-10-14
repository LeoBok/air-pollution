import { container, infoContainer, errParagraph, cityInput, apiKey, cityName, temperature, airQuality, AQIcolor, airborneParticulate25, cityNameValue, temperatureValue, pm25Value } from "./dom.js";


function getCityAQI() {

    cityInput.addEventListener('keyup', e => {

        if (e.key == 'Enter' && cityInput.value != '') {
            requestApi(cityInput.value);
        }
        
    })
}