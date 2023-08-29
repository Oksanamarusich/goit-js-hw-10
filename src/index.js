
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

 
elem.error.classList.add('is-hidden');
elem.select.classList.add('is-hidden');
elem.cardCatInfo.style.display = 'none';

fetchBreeds().then(data => {
    
          const breeds = data.map(breed => ({
          value: breed.id, text: breed.name
         }));
   const emptyObj = { text: "", value: "" };
   breeds.unshift(emptyObj);
   new SlimSelect({
      select: elem.select,
      data: breeds,
    })
})
.catch(err => {
  elem.cardCatInfo.style.display = 'none';
       console.log(err);
     Notify.failure('Oops! Something went wrong! Try reloading the page or select another cat breed!', {
       position: 'center-top',
        
      })
          
     })
  

elem.select.addEventListener('change', onChange);

function onChange(evt) {
  elem.loader.style.display = 'flex';
  elem.cardCatInfo.style.display = 'none';
  const breedId = evt.currentTarget.value;
  if (breedId === "") {
    elem.loader.style.display = 'none';
    return;
  } else {
     fetchCatByBreed(breedId)
      .then(data => {
        
          elem.select.style.display = 'none';
            
            const { url } = data[0];
            const { name, description, temperament } = data[0].breeds[0];
            
            elem.cardCatInfo.innerHTML = `<div><img src ="${url}", alt = "${name}", width ="800"</></div>
            <div><h1>${name}</h1>
            <p>${description}</p>
            <h2>Temperament</h2>
            <p>${temperament}</p></div>`
          elem.cardCatInfo.style.display = 'flex';
          
         })
      .catch(err => {
    
    elem.cardCatInfo.style.display = 'none';
            Notify.failure('Oops! Something went wrong! Try reloading the page or select another cat breed!', {
                position: 'center-top',
        
            })
             
                
        })
  
.finally(() => {
  elem.loader.style.display = 'none';
 
})

}
  }
   
 
