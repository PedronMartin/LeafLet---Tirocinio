//creazione della mappa centrata sull'Italia
var map8 = L.map('map8').setView([41.9, 12.5], 6);

//OSM
var tileLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map8);

//URL dell'immagine e dei range
var URL = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Grandi_Casate_Italiane_nel_1499.png/1024px-Grandi_Casate_Italiane_nel_1499.png";
var Bounds = L.latLngBounds( [36.5, 6.6], [47.1, 18.7]);

//creazione dell'elemento ImageOverlay
var imageOverlay = L.imageOverlay(URL, Bounds, {
    alt: "Mappa delle Grandi Casate Italiane nel 1400",
}).addTo(map8);

//adatta vista
map8.fitBounds(Bounds);
