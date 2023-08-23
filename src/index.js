

import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchBreeds } from "./cat-api";

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
elem.loader.style.visibility = "hidden";
//Notify.failure('Oops! Something went wrong! Try reloading the page!');

fetchBreeds();
elem.select.addEventListener('change', onChange);

function onChange() {
   
    


    
}




    
    
    



//     // const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
    
//     // const API_KEY = 'live_8aZbemLZIhFuazU7fpJCOOdB1PDhnbA1NaeZdUVRA8e4VHqiMPSJ8p5Axeu3hqO1';
//     // return fetch(BASE_URL).then((resp) =>
//     //     // if (!resp.ok) {
//     //     //     throw new Error(resp.statusText);
//     //     // }
//     //     resp.json())
//     //     .then(data => data.map(breed => ({ id: breed.id, name: breed.name })))
//     //     .catch(error => {
//     //         console.error('Помилка', error);
//     //         return [];
//     //     });
// }
    

    
//         // .then(breeds => {
//         //     console.log(breeds);
//         // });


// // fetch('https://api.thecatapi.com/v1/breeds') 
// //    .then(resp => {
// //         return resp.json;
// //     })
// //     .then(breeds => {
// //         console.log(breeds);
// //     })
// //     .catch(error => {
// //     console.log(error);
// //     })
 

    