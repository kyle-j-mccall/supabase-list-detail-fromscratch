import { getCities, getStates } from './fetch-utils.js';
import { renderCity, renderState } from './render-DOM-nodes.js';

const citiesListContainer = document.getElementById('cities-container');
const pnwStatesContainer = document.getElementById('pnw-states-container');



async function loadData() {
    const allCities = await getCities();
    for (let city of allCities) {
        const citiesEl = renderCity(city);
        citiesListContainer.append(citiesEl);
        // console.log(getCity(city.id));
    }
} 

async function loadStatesData() {
    const allStates = await getStates();
    for (let state of allStates) {
        const stateEl = renderState(state);
        pnwStatesContainer.append(stateEl);
        
    }
}

loadData();
loadStatesData();
getStates();


