
const url = 'https://api.thecatapi.com/v1';
const end_point = '/breeds';
const api_key = 'live_8aZbemLZIhFuazU7fpJCOOdB1PDhnbA1NaeZdUVRA8e4VHqiMPSJ8p5Axeu3hqO1';

export function fetchBreeds() {
    return fetch(`${url}${end_point}?api-key = ${api_key}`)
        .then((resp) => {
            console.log(resp);
            if (!resp.ok) {
                throw new Error(resp.statusText);
            }

            return resp.json();
            
        })
    
};


export function fetchCatByBreed(breedId) {
    return fetch(`${url}/images/search?api-key = ${api_key}&breed_ids=${breedId}`)
        .then((resp) => {
            console.log(resp);
            if (!resp.ok) {
                throw new Error(resp.statusText);
            }

            return resp.json();
            
        })
}