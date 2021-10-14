import { container, infoContainer, errParagraph, latitudeInput, longitudeInput, btn, apiKey, cityName, temperature, airQuality, AQIcolor, airborneParticulate25, cityNameValue, temperatureValue, pm25Value } from "./dom.js";
export { getPosition }

function getPosition() {
    btn.addEventListener('click', ()=>{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        }
    });
}

function error() {
    
    if (infoContainer.classList.contains('paragraph-info-show')) {
        
        infoContainer.classList.remove('paragraph-info-show')
        infoContainer.classList.add('paragraph-info-hide')

        errParagraph.classList.add('err-paragraph-show')
        errParagraph.innerText = 'Please enable your geolocation'
        container.appendChild(errParagraph)
    }

}

function success(pos) {

    if (infoContainer.classList.contains('paragraph-info-hide')) {
        
        infoContainer.classList.remove('paragraph-info-hide')
        errParagraph.classList.remove('err-paragraph-show')
        infoContainer.classList.add('paragraph-info-show')
        errParagraph.classList.add('err-paragraph-hide')
    }

    const crd = pos.coords;

    latitudeInput.value = crd.latitude;
    longitudeInput.value = crd.longitude;

    getCityData()

    async function getCityData() {

        const response = await fetch(`https://api.waqi.info/feed/geo:${latitudeInput.value};${longitudeInput.value}/?token=${apiKey}`);
        const jsonData = await response.json();

        const city = jsonData.data.city.name;
        const aqi = jsonData.data.aqi;
        const temp = jsonData.data.iaqi.t.v;
        const pm25 = jsonData.data.iaqi.pm25.v;

        cityName.innerText = 'Your location is: ';
        cityNameValue.innerText = `${city}`;
        cityName.appendChild(cityNameValue);
        infoContainer.appendChild(cityName);
        
        airQuality.innerText = 'Air Quality: ';
        airQuality.appendChild(AQIcolor);
        infoContainer.appendChild(airQuality);

        if (aqi <= 50) {

            AQIcolor.classList.remove('aqi-color-moderate', 'aqi-color-unhealthy-for-sensitive-groups', 'aqi-color-unhealthy', 'aqi-color-very-unhealthy', 'aqi-color-hazardous')
            AQIcolor.classList.add('aqi-color-good');
    
            AQIcolor.innerText = `${aqi}. Air quality is considered satisfactory 👍🏼`;
        }
        else if (aqi > 50 && aqi <= 100) {
            
            AQIcolor.classList.remove('aqi-color-good', 'aqi-color-unhealthy-for-sensitive-groups', 'aqi-color-unhealthy', 'aqi-color-very-unhealthy', 'aqi-color-hazardous')
            AQIcolor.classList.add('aqi-color-moderate');

            AQIcolor.innerText = `${aqi}. Air quality is acceptable 👌🏼`;
        }
        else if (aqi > 100 && aqi <= 150) {

            AQIcolor.classList.remove('aqi-color-good', 'aqi-color-moderate', 'aqi-color-unhealthy', 'aqi-color-very-unhealthy', 'aqi-color-hazardous')
            AQIcolor.classList.add('aqi-color-unhealthy-for-sensitive-groups');
    
            AQIcolor.innerText = `${aqis}. Members of sensitive groups may experience health effects. 👎🏼`;
        }
        else if (aqi > 150 && aqi <= 200) {

            AQIcolor.classList.remove('aqi-color-good', 'aqi-color-moderate', 'aqi-color-unhealthy-for-sensitive-groups', 'aqi-color-very-unhealthy', 'aqi-color-hazardous')
            AQIcolor.classList.add('aqi-color-unhealthy');
    
            AQIcolor.innerText = `${aqis}. Everyone may begin to experience health effects. 👎🏼`; 
        }
        else if (aqi > 200 && aqi <= 300) {

            AQIcolor.classList.remove('aqi-color-good', 'aqi-color-moderate', 'aqi-color-unhealthy-for-sensitive-groups', 'aqi-color-unhealthy', 'aqi-color-hazardous')
            AQIcolor.classList.add('aqi-color-very-unhealthy'); 
    
            AQIcolor.innerText = `${aqi}. Health warnings of emergency conditions. 👎🏼`;
        }
        else if (aqi > 300) {

            AQIcolor.classList.remove('aqi-color-good', 'aqi-color-moderate', 'aqi-color-unhealthy-for-sensitive-groups', 'aqi-color-unhealthy', 'aqi-color-very-unhealthy')
            AQIcolor.classList.add('aqi-color-hazardous');
    
            AQIcolor.innerText = `${aqi}. Health alert: everyone may experience more serious health effects. 👎🏼`;
        }

        airborneParticulate25.innerText = 'Airborne particulate matter(PM2.5): ';
        pm25Value.innerText = `${pm25}`;
        airborneParticulate25.appendChild(pm25Value);
        infoContainer.appendChild(airborneParticulate25);

        temperature.innerText = 'Temperature: ';
        temperatureValue.innerText = `${temp} °C`;
        temperature.appendChild(temperatureValue)
        infoContainer.appendChild(temperature);
    }
}