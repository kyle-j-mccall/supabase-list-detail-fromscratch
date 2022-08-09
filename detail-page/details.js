import { getCity } from '../fetch-utils.js';
import { renderCityDetail } from '../render-DOM-nodes.js';

const cityContainer = document.getElementById('cities-container');

const params = new URLSearchParams(window.location.search);
const cityId = params.get('id');
async function loadData() {

    const city = await getCity(cityId);
    const cityDiv = renderCityDetail(city);
    cityContainer.append(cityDiv);

}

loadData();