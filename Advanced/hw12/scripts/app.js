window.addEventListener('DOMContentLoaded', () => {

    const start_fn_1 = document.querySelector('.start-fn-1');
    const episodes = document.querySelector('.episodes');
    const start_fn_2 = document.querySelector('.start-fn-2');
    const allCharacters = document.querySelector('.allCharacters');
    const allPlanets = document.querySelector('.planets');
    const start_fn_3 = document.querySelector('.start-fn-3');

    const BASE = 'https://swapi.dev/api/';
    const films = 'https://swapi.dev/api/films/';
    const allEpisodes = 'https://swapi.dev/api/films';
    const pageForPlanets = 'https://swapi.dev/api/planets/';

    const toSecureUrl = link => {
        return link.map(el => {
            let protocol = el.slice(0, 4);
            let url = el.slice(4);
            if(url[0] === 's') {
                return el;
            } else {
                return `${protocol}s${url}`
            }
        })
    }
    const getData = url => {
        const link = toSecureUrl(url);
        console.log(link);
        return fetch(link)
            .then(data => data.json())
    }

    const getEpisodes = () => {
        return getData(films)
            .then(data => data.results.map(film => `<option value='${film.episode_id}'>${film.title}</option>`));
    }

    const renderEpisodes = (episode) => {
        document.querySelector('.episodes').innerHTML = `
            <option selected disabled>Select episode</option>
            ${episode}
        `
    }

    const getCharacters = () => {
        return getData(`${allEpisodes}/${episodes.value}`)
            .then(data => (data.characters).map(getData))
            .then(data => Promise.all(data))
            .then(data => data.map(item => {
                return {
                    name: item.name,
                    year: item.birth_year,
                    gender: item.gender
                }
            }));
    }

    const renderCharacters = (arr) => {
        allCharacters.innerHTML = arr.map(item => {
            return `
                <div class="col-lg-4 col-sm-12">
                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">Name - ${item.name}</h5>
                            <h6 class="card-subtitle text-muted">Birth year - ${item.year}</h6>
                            <p class="card-text">Gender - ${item.gender}</p>
                        </div>
                    </div>
                </div>
            `
        }).join('');
    }
    
    let planetsPage = 1
    const getPlanets = currentPage => {
        return getData(`${pageForPlanets}?page=${currentPage}`)
            .then(data => data.results.map(planet => `<li class="list-group-item">${planet.name}</li>`).join(''))
    };

    const renderPlanets = planets => {
        allPlanets.innerHTML = `
            <ul class="list-group-item">
                ${planets}
            </ul>
            <button type="button" class="btn btn-info prev">Prev page</button>
            <button type="button" class="btn btn-info next">Next page</button>
        `;

        document.querySelector('.prev').addEventListener('click', () => {
            if(planetsPage > 1) {
                getPlanets(--planetsPage).then(renderPlanets);
            }
        });

        document.querySelector('.next').addEventListener('click', () => {
            getData(pageForPlanets)
                .then(data => {
                    const allPages = data.count / 10;
                    if(planetsPage < allPages) {
                    getPlanets(++planetsPage).then(renderPlanets);
                }
                });
                
        });

    }

    start_fn_1.addEventListener('click', () => {
        getEpisodes().then(renderEpisodes);
        episodes.classList.remove('d-none');
    });

    start_fn_2.addEventListener('click', () => {
        if(episodes.value && episodes.value !== 'Select episode') {
            getCharacters().then(renderCharacters)
        } 
    });

    start_fn_3.addEventListener('click', () => {
        getPlanets(planetsPage).then(renderPlanets)
    });
    
});