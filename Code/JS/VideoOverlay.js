//creazione mappa centrata sull'Italia
var map9 = L.map('map9');

//OSM
var tileLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map9);

//URL del video e dei range
var URL = "../Video_map9.mp4";
var Bounds = L.latLngBounds([45.4370, 10.9900], [45.4400, 10.9940]);

//creazione dell'elemento videoOverlay
map9.fitBounds(Bounds);

const videoOverlay = L.videoOverlay(URL, Bounds, {
    opacity: 0.8,
    interactive: true,
    autoplay: true,
    muted: true,
    playsInline: true
}).addTo(map9);