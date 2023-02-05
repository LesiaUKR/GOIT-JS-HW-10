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
     if (!countryName) {
        clearPage();
        return
    }
    fetchCountries(countryName)
        .then(country => {
            if (country.length > 10) {
                Notiflix.Notify.info('Too many matches found. Please enter a more specific name.')
                clearPage();
                return;
            } else if (country.length >= 2) {
                createMarkupCountryList(country)
                countryInfo.innerHTML = '';
            } else if (country.length === 1) {
                createMarkupCountryInfo(country)
                countryList.innerHTML = '';
            }

        })
        .catch(error => {
            Notiflix.Notify.failure('Oops, there is no country with that name');
            clearPage();
            return error;
        });
        }

function createMarkupCountryList(countries) {
    const markup = countries.map(({
        name,
        flags
    }) => `<li class='countries-item'>
        <img class='counries-item_flag' src='${flags.svg}' alt='flag of ${name}'width='30'>
        <h2 class='countries-item_name'>${name.common}</h2>
           </li>`).join('')

        countryList.innerHTML = markup;
}

function createMarkupCountryInfo(countries) {
    const markup = countries.map(({
        name,
        capital,
        population,
        flags,
        languages }) => `
        <div class='country-title'>
        <img class='counries-item_flag' src='${flags.svg}' alt='flag of ${name}'width='30'>
        <h2 class='countries-item_name'>${name.common}</h2>
        </div>
        <p><span><b>Capital:</b> </span>${capital}</p>
        <p><span><b>Population:</b> </span>${population}</p>
        <p><span><b>Languages:</b> </span>${Object.values(languages).join(",")}</p>`).join('');;
     
    countryInfo.innerHTML = markup;
}

function clearPage() {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';
}