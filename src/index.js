
import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_q2UOY4s0dIViJHeJ7pAcyDg3qz2DWjVSwrpeDNpBfdmY9MuVyUhyMLubA5l9R5nP";
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

// elem.loader.style.visibility = 'hidden';
// elem.error.style.visibility = 'hidden';
// elem.cardCatInfo.style.visibility = 'hidden';
 elem.error.classList.add('is-hidden');
 elem.loader.classList.add('is-hidden');
elem.loader.classList.replace('loader', 'is-hidden');
//elem.cardCatInfo.classList.add('is-hidden');
//elem.cardCatInfo.classList.replace('cat-info', 'is-hidden');
elem.select.classList.add('is-hidden');

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
       console.log(err);
      Notify.failure('Oops! Something went wrong! Try reloading the page or select another cat breed!', {
        position: 'center-top',
        
      })
          .finally(() => {
            elem.select.classList.remove('is-hidden');
            elem.loader.classList.replace('loader', 'is-hidden')
         })
});
        

elem.cardCatInfo.classList.add('is-hidden');
elem.loader.classList.replace('is-hidden', 'loader')
elem.select.addEventListener('change', onChange);

function onChange(evt) {
  
     const breedId = evt.currentTarget.value;
    fetchCatByBreed(breedId)
      .then(data => {
        if (data[0]) {
            elem.loader.style.visibility = 'visible';
         elem.cardCatInfo.style.visibility = 'visible';
          }
         
            const { url } = data[0];
            const { name, description, temperament } = data[0].breeds[0];
            elem.cardCatInfo.classList.remove('is-hidden');
            elem.cardCatInfo.innerHTML = `<div><img src ="${url}", alt = "${name}", width ="800"</></div>
            <div><h1>${name}</h1>
            <p>${description}</p>
            <h2>Temperament</h2>
            <p>${temperament}</p></div>`
         
        })
        .catch(err => {
            
            Notify.failure('Oops! Something went wrong! Try reloading the page or select another cat breed!', {
                position: 'center-top',
        
            })
              .finally(() => {
            elem.cardCatInfo.classList.remove('is-hidden');
elem.loader.classList.replace('loader', 'is-hidden')
          })
                
        });
        
}

