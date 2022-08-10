import { getState } from '../fetch-utils.js';
import { renderStateDetail } from '../render-DOM-nodes.js';

const detailsContainer = document.getElementById('details-container');

const params = new URLSearchParams(window.location.search);

const stateId = params.get('id');
async function loadStateDetail() {
    const state = await getState(stateId);
    const stateDiv = renderStateDetail(state);
    detailsContainer.append(stateDiv);
}

loadStateDetail();