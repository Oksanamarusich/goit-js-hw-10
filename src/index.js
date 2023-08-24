

import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchBreeds, fetchCatByBreed } from "./cat-api";

const elem = {
    select: document.querySelector('.breed-select'),
    container: document.querySelector('.cat-info'),
    loader: document.querySelector('.loader'),
    error: document.querySelector('.error'),
    cardCatInfo: document.querySelector('.cat-info'),
} 


 elem.error.classList.add('is-hidden');
 elem.loader.classList.replace('loader', 'is-hidden');

fetchBreeds().then(data => {
    const breeds = data.map(breed => ({
        value: breed.id, text: breed.name
    }));
      new SlimSelect({
    select: elem.select,
    data: breeds,
 });
    
    })
   .catch(err => {
      Notify.failure('Oops! Something went wrong! Try reloading the page or select another cat breed!', {
        position: 'center-top',
        
}); 
});
        


elem.select.addEventListener('change', onChange);

function onChange(evt) {
    fetchCatByBreed()
    //elem.loader.classList.replace('is-hidden', 'loader');
    //elem.select.classList.add('is-hidden');


    
}

function createMarcup() {
    
}


    
    
    



