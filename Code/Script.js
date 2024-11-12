//creazione mappa centrata sull'Univesità di Verona
var map = L.map('map').setView([45.40342369717214, 10.998998624064418], 16);

//carica OpenStreetMap e proprietà
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//aggiunge marker su Ca'Vignal
var marker = L.marker([45.40342369717214, 10.998998624064418]).addTo(map);

//aggiunge cerchio su Sede di Borgo Roma
var circle = L.circle([45.40342369717214, 10.998998624064418], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.4,
    radius: 250
}).addTo(map);

//crea popup relativi agli oggetti
marker.bindPopup("<b>Ca'Vignal").openPopup();
circle.bindPopup("Università degli Studi di Verona");

//aggiunge popup alla mappa
var popup = L.popup();

//funzione richiamata al premere su un popup
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Hai premuto la mappa a " + e.latlng.toString())
        .openOn(map);
}

//attivazione funzione
map.on('click', onMapClick);