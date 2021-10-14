import { container, infoContainer, errParagraph, cityInput, cityName, temperature, airQuality, AQIcolor, airborneParticulate25, cityNameValue, temperatureValue, pm25Value } from "./dom.js";
export { getCityAQI }

function getCityAQI() {

    cityInput.addEventListener('keyup', e => {

        if (e.key == 'Enter' && cityInput.value != '') {
            requestApi(cityInput.value);
        }

    });

    async function requestApi(city) {
        const response = await fetch(`https://api.waqi.info/feed/${city}/?token=${process.env.API_KEY}`);
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

        cityName.innerText = 'Your location is: ';
        cityNameValue.innerText = `${citys}`;
        cityName.appendChild(cityNameValue);
        infoContainer.appendChild(cityName);
    
        airQuality.innerText = 'Air Quality: ';
        airQuality.appendChild(AQIcolor);
        infoContainer.appendChild(airQuality);
        
        if (aqis <= 50) {
            
            AQIcolor.classList.remove('aqi-color-moderate', 'aqi-color-unhealthy-for-sensitive-groups', 'aqi-color-unhealthy', 'aqi-color-very-unhealthy', 'aqi-color-hazardous')
            AQIcolor.classList.add('aqi-color-good');

            AQIcolor.innerText = `${aqis}. Air quality is considered satisfactory 👍🏼`;
        }
    
        else if (aqis > 50 && aqis <= 100) {

            AQIcolor.classList.remove('aqi-color-good', 'aqi-color-unhealthy-for-sensitive-groups', 'aqi-color-unhealthy', 'aqi-color-very-unhealthy', 'aqi-color-hazardous')
            AQIcolor.classList.add('aqi-color-moderate');

            AQIcolor.innerText = `${aqis}. Air quality is acceptable 👌🏼`;
        }

        else if (aqis > 100 && aqis <= 150) {

            AQIcolor.classList.remove('aqi-color-good', 'aqi-color-moderate', 'aqi-color-unhealthy', 'aqi-color-very-unhealthy', 'aqi-color-hazardous')
            AQIcolor.classList.add('aqi-color-unhealthy-for-sensitive-groups');

            AQIcolor.innerText = `${aqis}. Members of sensitive groups may experience health effects. 👎🏼`;
        }

        else if (aqis > 150 && aqis <= 200) {

            AQIcolor.classList.remove('aqi-color-good', 'aqi-color-moderate', 'aqi-color-unhealthy-for-sensitive-groups', 'aqi-color-very-unhealthy', 'aqi-color-hazardous')
            AQIcolor.classList.add('aqi-color-unhealthy');

            AQIcolor.innerText = `${aqis}. Everyone may begin to experience health effects. 👎🏼`;

        }

        else if (aqis > 200 && aqis <= 300) {
        
            AQIcolor.classList.remove('aqi-color-good', 'aqi-color-moderate', 'aqi-color-unhealthy-for-sensitive-groups', 'aqi-color-unhealthy', 'aqi-color-hazardous')
            AQIcolor.classList.add('aqi-color-very-unhealthy'); 

            AQIcolor.innerText = `${aqis}. Health warnings of emergency conditions. 👎🏼`;

        }
    
        else if (aqis > 300) {

            AQIcolor.classList.remove('aqi-color-good', 'aqi-color-moderate', 'aqi-color-unhealthy-for-sensitive-groups', 'aqi-color-unhealthy', 'aqi-color-very-unhealthy')
            AQIcolor.classList.add('aqi-color-hazardous');

            AQIcolor.innerText = `${aqis}. Health alert: everyone may experience more serious health effects. 👎🏼`;

        }

        airborneParticulate25.innerText = 'Airborne particulate matter(PM2.5): ';
        pm25Value.innerText = `${pm25s}`;
        airborneParticulate25.appendChild(pm25Value);
        infoContainer.appendChild(airborneParticulate25);
    
        temperature.innerText = 'Temperature: ';
        temperatureValue.innerText = `${temps} °C`;
        temperature.appendChild(temperatureValue)
        infoContainer.appendChild(temperature);
    }
}