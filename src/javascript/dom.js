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
