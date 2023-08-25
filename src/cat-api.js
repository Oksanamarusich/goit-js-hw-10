import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "live_q2UOY4s0dIViJHeJ7pAcyDg3qz2DWjVSwrpeDNpBfdmY9MuVyUhyMLubA5l9R5nP";
axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';

const url = 'https://api.thecatapi.com/v1/';


 function fetchBreeds() {
    return axios('breeds')
        .then(({data}) => {
            console.log(data);
            return data;
        })
        .catch(error => {
            console.log(error)
            // Notify.failure('Oops! Something went wrong! Try reloading the page or select another cat breed!', {
            //      position: 'center-top')
    })
};

 function fetchCatByBreed(breedId) {
    return axios.get(`${url}images/search?breed_ids=${breedId}`)
        .then(({data}) => {
            console.log(data);
            return data;
        })
        .catch(error => {
            console.log(error)
            // Notify.failure('Oops! Something went wrong! Try reloading the page or select another cat breed!', {
            //      position: 'center-top')
    })
};


export { fetchBreeds, fetchCatByBreed };