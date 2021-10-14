import { style } from '../css/style.css';
import { getPosition as currentPosition } from './get_position';
import { getCityAQI as searchCity } from "./search_city.js";

currentPosition();
searchCity();