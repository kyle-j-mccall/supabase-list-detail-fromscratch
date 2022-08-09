import { getCities } from './fetch-utils.js';
import { renderCity } from './render-DOM-nodes.js';

const citiesListContainer = document.getElementById('cities-container');


async function loadData() {
    const allCities = await getCities();
    console.log(allCities);
    for (let city of allCities) {
        const citiesEl = renderCity(city);
        citiesListContainer.append(citiesEl);
        // console.log(getCity(city.id));
    }
} 
loadData();


