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

const icon = document.createElement('img');
icon.src = '/dist/images/position.svg';
iconBox.appendChild(icon);

const btn = document.createElement('button');
btn.classList.add('form-control', 'button');
btn.innerText = 'Get your current position';
getPosBtn.appendChild(btn);
