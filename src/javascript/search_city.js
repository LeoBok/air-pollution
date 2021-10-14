import { container, infoContainer, errParagraph, cityInput, apiKey, cityName, temperature, airQuality, AQIcolor, airborneParticulate25, cityNameValue, temperatureValue, pm25Value } from "./dom.js";


function getCityAQI() {

    cityInput.addEventListener('keyup', e => {

        if (e.key == 'Enter' && cityInput.value != '') {
            requestApi(cityInput.value);
        }

    });

    async function requestApi(city) {
        const response = await fetch(`https://api.waqi.info/feed/${city}/?token=${apiKey}`);
        const jsonData = await response.json();

        if (jsonData.status == 'error') {

            infoContainer.classList.remove('paragraph-info-show');
            infoContainer.classList.remove('err-paragraph-hide')
            infoContainer.classList.add('paragraph-info-hide');

            errParagraph.classList.add('err-paragraph-show');
            alert(`Sorry, ${jsonData.data}`)
            container.appendChild(errParagraph);
        }
        else if (jsonData.status == 'ok') {
            
            infoContainer.classList.remove('paragraph-info-hide')
            errParagraph.classList.remove('err-paragraph-show')
            infoContainer.classList.add('paragraph-info-show')
            errParagraph.classList.add('err-paragraph-hide')
        }

        const citys = jsonData.data.city.name;
        const aqis = jsonData.data.aqi;
        const temps = jsonData.data.iaqi.t.v;
        const pm25s = jsonData.data.iaqi.pm25.v;
    }
}