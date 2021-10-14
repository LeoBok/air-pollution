import { container, infoContainer, errParagraph, latitudeInput, longitudeInput, btn, apiKey, cityName, temperature, airQuality, AQIcolor, airborneParticulate25, cityNameValue, temperatureValue, pm25Value } from "./dom.js";


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
}