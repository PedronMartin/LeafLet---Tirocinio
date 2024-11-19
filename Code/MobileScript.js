
//creazione mappa
const map = L.map('map').fitWorld();

//collegamento OpenStreetMaps
const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 22,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//funzione che preleva le coordinate attuali dell'utente e imposta un marker e un cerchio attorno
function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(map)
        .bindPopup("Sei a " + radius + " metri da questo punto!").openPopup();

    //L.circle(e.latlng, radius).addTo(map);
}

//funzione di errore
function onLocationError(e) {
    alert(e.message);
}

//caricamento funzioni nella mappa
map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);

//setting zoom e vista
map.locate({setView: true, maxZoom: 22});