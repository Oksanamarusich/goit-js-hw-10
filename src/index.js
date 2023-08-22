import axios from "axios";
//import { fetchBreeds, fetchCatByBreed } from "./cat-api";
axios.defaults.headers.common["x-api-key"] = "live_8aZbemLZIhFuazU7fpJCOOdB1PDhnbA1NaeZdUVRA8e4VHqiMPSJ8p5Axeu3hqO1";




const elem = {
    select: document.querySelector('.breed-select'),
    container: document.querySelector('.cat-info'),
    loader: document.querySelector('.loader'),
     error: document.querySelector('.error'),
} 
elem.select.addEventListener('change', onChange);

function onChange(event) {
    fetch(breeds);
    //event.currentTarget.value

    
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