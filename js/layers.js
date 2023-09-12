
function addBars () {

    map.addSource("bars_source", {
        type:"vector",
        "url":"data/bars.js"
    });

   map.addLayer({
    "id":"bars",
    "type": 'geojson',
    "source":"bars_source",
   });

}

function addPopupBars(){

}