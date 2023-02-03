import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
const input = document.querySelector('input#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

input.addEventListener('input', debounce(searchCountry, DEBOUNCE_DELAY));

function searchCountry(event) {
    const countryName = event.target.value.trim();
    console.log(countryName)
     if (!searchCountry) {
        clearPage();
        return
    }
    return fetchCountries(countryName)
        .then(country => {
            console.log(country);
               createMarkupCountryList(countryName);
    });
        };

function createMarkupCountryList(countries) {
    const markup = countries.map(({
        name,
        flags
    }) => `<li>
<img class='counries-item_flag' src='${flags.svg}' alt='flag of ${name}'width='30'>
<h2 class='countries-item__name'>${name.official}</h2>
</li>`).join('')

        countryList.innerHTML = markup;
}
