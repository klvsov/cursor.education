export const pageForPlanets = 'https://swapi.dev/api/planets/';
export let planetsPage = 1;
export const getData = url => {
    return fetch(url)
        .then(data => data.json())
}

export const getPlanets = currentPage => {
    return getData(`${pageForPlanets}?page=${currentPage}`)
        .then(data => data.results.map(planet => `<li class="list-group-item">${planet.name}</li>`).join(''))
};