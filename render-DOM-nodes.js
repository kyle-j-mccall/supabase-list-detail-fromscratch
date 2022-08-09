

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
    const link = document.createElement('a');
    const image = document.createElement('img');
    const cityName = document.createElement('p');

    image.src = `/assets/oregon-cities/${city.name}.jpg`;
   
    cityDiv.append(image, cityName);
    
    link.append(cityDiv);

    return link;

}