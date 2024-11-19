
//creazione mappa
const map = L.map('map').fitWorld();

//collegamento OpenStreetMaps
const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 22,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//funzione che preleva le coordinate attuali dell'utente e imposta un marker e un cerchio attorno
function onLocationFound(e) {
    //'e' è l'elemento Leaflet che contiene la posizione dell'utente
    //accuracy rappresenta l'accuratezza del dato prelevato dalla geolocalizzazione
    //con round della lib Math, arrontondo il valore ad intero
    var radius = Math.round(e.accuracy);

    //crea Marker e carica subito il popup
    L.marker(e.latlng).addTo(map)
        .bindPopup("Grazie per aver condiviso la tua posizione.\nTu sei qui!").openPopup();

    //cerchio sull'area indicata dall'accuratezza del dato prelevato
    L.circle(e.latlng, radius).addTo(map);
}

//funzione di errore
function onLocationError(e) {
    alert("C'è un problema con la tua geolocalizzazione.");
}

//caricamento funzioni nella mappa
map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);

//setting zoom e vista
map.locate({setView: true, maxZoom: 22});