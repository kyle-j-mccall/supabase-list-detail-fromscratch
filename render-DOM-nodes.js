

export function renderCity(city) {
    const cityDiv = document.createElement('div');
    const link = document.createElement('a');
    const image = document.createElement('img');
    const cityName = document.createElement('p');

    image.src = `/assets/oregon-cities/${city.name}.jpg`;
    cityName.textContent = city.name;
    link.href = `./detail-page/?id=${city.id}`;
    cityDiv.append(image, cityName);
    
    link.append(cityDiv);

    return link;

}
export function renderCityDetail(city) {
    const cityDiv = document.createElement('div');
    const cityPopulation = document.createElement('p');
    const image = document.createElement('img');
    const cityName = document.createElement('p');
    const cityRegion = document.createElement('p');

    image.src = `/assets/oregon-cities/${city.name}.jpg`;

    cityRegion.textContent = `Region: ${city.region}`;
    cityName.textContent = city.name;
    cityPopulation.textContent = `Population: ${city.population}`;
   
    cityDiv.append(image, cityName, cityPopulation, cityRegion);
    
    
    

    return cityDiv;

}

export function renderState(state) {
    const stateDiv = document.createElement('div');
    const link = document.createElement('a');
    const image = document.createElement('img');
    const stateName = document.createElement('p');

    image.src = `/assets/states/${state.name}.jpg`;
    stateName.textContent = state.name;
    // link.href = `./detail-page/?id=${city.id}`;
    stateDiv.append(image, stateName);
    
    link.append(stateDiv);

    return link;
}

export function renderStateDetail(state) {
    const stateDiv = document.createElement('div');
    const statePopulation = document.createElement('p');
    const image = document.createElement('img');
    const stateName = document.createElement('p');
    const stateCapital = document.createElement('p');

    image.src = `/assets/oregon-cities/${state.name}.jpg`;

    stateCapital.textContent = `Capital: ${state.capital}`;
    stateName.textContent = state.name;
    statePopulation.textContent = `Population: ${state.population}`;
   
    stateDiv.append(image, stateName, statePopulation, stateCapital);
    
    
    

    return stateDiv;
}