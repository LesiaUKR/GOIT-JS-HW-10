import './css/styles.css';
import { fetchCountries } from './js/fetchCountries'
import debounce from 'lodash.debounce'
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
const input = document.querySelector('input#search-box');
console.log(input);
const countryList = document.querySelector('.country-list');
console.log(countryList);
const countryInfo = document.querySelector('.country-info');
console.log(countryInfo);



//   <li>
//         <img class='counries-item_flag' src='${}' alt='flag of ${}'width='30'>
//         <h2 class='countries-item__name'>${country.name.common}</h2>
//       </li>