import { getCity } from '../fetch-utils.js';
import { renderCityDetail } from '../render-DOM-nodes.js';

const detailsContainer = document.getElementById('details-container');

const params = new URLSearchParams(window.location.search);


const cityId = params.get('id');
async function loadData() {

    const city = await getCity(cityId);
    const cityDiv = renderCityDetail(city);
    detailsContainer.append(cityDiv);

}

// const stateId = params.get('id');
// async function loadStateDetail() {
//     const state = await getState(stateId);
//     const stateDiv = renderStateDetail(state);
//     detailsContainer.append(stateDiv);
// }

// loadStateDetail();
loadData();