const BASE_URL = 'https://restcountries.com/v2.1/name/';
const options = 'name,capital,population,flags,languages';

function fetchCountries(name) {
    return fetch(`${BASE_URL}${name}?fields=${options}`)
     .then(resp => {
        if (!resp.ok) {
            throw new Error(resp.statusText);
        }
         return resp.json();
    })
};
console.log(fetchCountries(name))
export { fetchCountries };