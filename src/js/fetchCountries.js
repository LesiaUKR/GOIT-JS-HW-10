function fetchCountries(name) {
    return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name.official,capital,population,flags.svg,languages`)
     .then(resp => {
        if (!resp.ok) {
            throw new Error(resp.statusText);
        }
         return resp.json();
    })
};

export { fetchCountries };