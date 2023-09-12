
let map;

// Start init()
function init() {

    //Access TOKEN
    mapboxgl.accessToken = 'pk.eyJ1IjoianVhbnJ1Z2FyIiwiYSI6ImNranlpd2lqbzB5djQydW1sZTRvem9tdmgifQ.zvNvGIYji6wVpwjlnTHeJg';

    //MAP DECLARATION
    map = new mapboxgl.Map({
    container: 'map-canvas', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-0.37918, 39.4741], // starting position [lng, lat] = Valencia
    zoom: 14, // starting zoom

    });

    //CONTROLS
    map.addControl(new mapboxgl.AttributionControl({ compact: true }));
    map.addControl(new mapboxgl.NavigationControl());


    //Adding layers to the map
    map.on('load', function(){

        addBars();

        addPopupBars();
    });

};
// End init()
