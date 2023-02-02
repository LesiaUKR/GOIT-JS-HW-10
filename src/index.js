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
    const findCountry = event.target.value.trim();
    fetchCountries(findCountry)
        };

// function createMarkup(arr) {
//     const markup = arr.map(({
//         name,
//         race
//     }) => `<li>
// <img class='counries-item_flag' src='${}' alt='flag of ${}'width='30'>
// <h2 class='countries-item__name'>${country.name.common}</h2>
// </li>`).join('')

//     list.insertAdjacentHTML('beforeend', markup)
// }
