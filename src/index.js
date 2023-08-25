

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
elem.loader.classList.add('is-hidden');
elem.loader.classList.replace('loader', 'is-hidden');
elem.cardCatInfo.classList.add('is-hidden');

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
    elem.loader.classList.replace('is-hidden', 'loader');
   
    console.log(evt.currentTarget);
     const breedId = evt.currentTarget.value;
     console.log(breedId);
    
    fetchCatByBreed(breedId)
        .then(data => {
            console.log(data);
            const {url} = data[0];
            console.log(data[0]);

            
            const { breeds} = data[0];
            console.log(breeds);
            const { name, description, temperament } = breeds;
            
            elem.cardCatInfo.innerHTML = `<img src ="${ url }", alt = "",</><h1></h1><p></p><h2>Temperament</h2><p></p>`
    })
        .catch(err => {
            
            Notify.failure('Oops! Something went wrong! Try reloading the page or select another cat breed!', {
                position: 'center-top',
        
            });
         });
        
           
        
 
elem.loader.classList.replace('loader', 'is-hidden');
elem.select.classList.add('is-hidden');


    
 }

// function createMarcup(arr) {
//     return arr.map(({url, breeds: {name,description,temperament}}) => `<img src = "${url}", alt = "${breeds[0].name}" width = "400"></>
//     <h1>${breeds[0].name}</h1>
//     <p>${breeds[0].description}</p>
//     <h2>Temperament:</h2>
//     <p>${breeds[0].temperament}</p>`).join('')

// }
 //createMarcup()

    
    // elem.loader.classList.replace('loader', 'is-hidden');
    //     elem.select.classList.remove('is-hidden');
    //         const { url } = data[0];
    //         console.log(data[0]);
    //         const { name, description, temperament } = data[0].breeds[0];
        
    //     elem.cardCatInfo.innerHTML = `<div class="box-img"><img src="${url}" alt="${name}" width="400"/></div><div class="box"><h1>${name}</h1><p>${description}</p><p><b>Temperament:</b> ${temperament}</p></div>`
    //     elem.cardCatInfo.classList.remove('is-hidden');
    



