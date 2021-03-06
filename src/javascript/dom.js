const container = document.querySelector('.container');

const title = document.createElement('h1');
title.innerText = 'Check your Air Pollution:';
container.appendChild(title);

const coordInputContainer = document.querySelector('.coord-input-container');
coordInputContainer.classList.add('.coord-input-container');
container.appendChild(coordInputContainer);

const latitudeInput = document.createElement('input');
latitudeInput.classList.add('form-control');
latitudeInput.placeholder = 'Your current latitude';
coordInputContainer.appendChild(latitudeInput);

const longitudeInput = document.createElement('input');
longitudeInput.classList.add('form-control');
longitudeInput.placeholder = 'Your current longitude';
coordInputContainer.appendChild(longitudeInput);

const getPosBtn = document.querySelector('.get-position-btn');
container.appendChild(getPosBtn);

const iconBox = document.createElement('span');
iconBox.classList.add('input-group-text');
getPosBtn.appendChild(iconBox);

const btn = document.createElement('button');
btn.classList.add('form-control', 'button');
btn.innerText = 'Get your current position';
getPosBtn.appendChild(btn);

const cityInputContainer = document.querySelector('.city-input-container');
container.appendChild(cityInputContainer);

const cityInput = document.createElement('input');
cityInput.classList.add('form-control');
cityInput.placeholder = 'Look for a city';
cityInputContainer.appendChild(cityInput);

const infoContainer = document.querySelector('.paragraph-info');
infoContainer.classList.add('paragraph-info-show');
container.appendChild(infoContainer);

const errParagraph = document.createElement('p');

const cityName = document.createElement('p');
const cityNameValue = document.createElement('span');
cityNameValue.classList.add('city-name')

const temperature = document.createElement('p')
const temperatureValue = document.createElement('span');

const airQuality = document.createElement('p');
const airQualityValue = document.createElement('span');

const airborneParticulate25 = document.createElement('p');
const pm25Value = document.createElement('span');

const AQIcolor = document.createElement('span');

export { container, infoContainer, errParagraph, latitudeInput, longitudeInput, btn, cityInput, cityName, temperature, airQuality, AQIcolor, airborneParticulate25, cityNameValue, temperatureValue, airQualityValue, pm25Value }