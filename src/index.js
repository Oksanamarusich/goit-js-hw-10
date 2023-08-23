import axios from "axios";
//import { fetchBreeds, fetchCatByBreed } from "./cat-api";
axios.defaults.headers.common["x-api-key"] = "live_8aZbemLZIhFuazU7fpJCOOdB1PDhnbA1NaeZdUVRA8e4VHqiMPSJ8p5Axeu3hqO1";

import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const elem = {
    select: document.querySelector('.breed-select'),
    container: document.querySelector('.cat-info'),
    loader: document.querySelector('.loader'),
     error: document.querySelector('.error'),
} 
 const slimSelect = new SlimSelect({
     select: elem.select,
 })

//elem.error.style.visibility = "hidden";
//elem.error.style.visibility = "visible";

Notify.failure('Oops! Something went wrong! Try reloading the page!');

elem.select.addEventListener('change', onChange);

function onChange() {
    

    

    
}

fetch('https://api.thecatapi.com/v1/breeds') 
   .then(resp => {
        return resp.json;
    })
    .then(breeds => {
        console.log(breeds);
    })
    .catch(error => {
    console.log(error);
    })
 

    