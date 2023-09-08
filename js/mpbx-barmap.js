
// Start init()

function init() {
//access token
mapboxgl.accessToken = 'pk.eyJ1IjoianVhbnJ1Z2FyIiwiYSI6ImNranlpd2lqbzB5djQydW1sZTRvem9tdmgifQ.zvNvGIYji6wVpwjlnTHeJg';

const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/streets-v12', // style URL
center: [-0.37918, 39.4741], // starting position [lng, lat] = Valencia
zoom: 9, // starting zoom

});

}   

// End init()

// controls


 //
