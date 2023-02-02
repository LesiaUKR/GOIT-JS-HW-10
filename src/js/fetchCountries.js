const BASE_URL = 'https://restcountries.com/v3.1/name/';
const options = 'name.official,capital,population,flags.svg,languages';

function fetchCountries(name) {
    return fetch(`${BASE_URL}${name}?fields=${COUNTRY_FIELDS}`)
     .then(resp => {
        if (!resp.ok) {
            throw new Error(resp.statusText);
        }
         return resp.json();
    })
};

export { fetchCountries };