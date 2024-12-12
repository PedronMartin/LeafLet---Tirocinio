//estremi validi per l'inserimento delle coordinate
//ho inserito quelle dell'Italia per assicurare che il cluster venga generato su terra ferma per una migliore visibilità
const maxLat = 46.5, minLat = 44.0, maxLong = 12.5, minLong = 7.0;

//1 km in latitudine e latitudine generata random
const rangeLatitudine = 0.00899;
var randomLat = Math.random() * (maxLat - minLat) + minLat;

//1 km in longitudine (dipende dalla latitudine) e longitudine generata random (recuperato formule per conversione apposita)
const rangeLongitudine = 1 / (111.32 * Math.cos(randomLat * Math.PI / 180));
var randomLong = Math.random() * (maxLong - minLong) + minLong;

//cluster principale
var markers = L.markerClusterGroup();

//aggiungo un certo numero di marker interni al cluster, delimitati da +-1km dal centro del marker primario
for (var i = 0; i < 4; i++) {
    var marker = L.marker(randomPosition());
    markers.addLayer(marker);
}

//creazione mappa, centrata sulla posizione centrale del cluster generato randomicamente
var map5 = L.map('map5').setView([randomLat, randomLong], 11);

//rif. OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map5);

//aggiungo alla mappa
map5.addLayer(markers);

//adatta la vista al cluster (media di posizione)
map5.fitBounds(markers.getBounds());


/*



    FUNZIONI



*/

//ritorna valori random, a +-1 km in latitudine e longitudine, rispetto al valore del cluster precedentemente calcolato
function randomPosition() {
    //il minimo è -(rangeLatitudine) ovvero -1km dalla posizione creata random
    //il massimo è +1 km
    var addLat = Math.random() * (rangeLatitudine * 2) - rangeLatitudine;
    var addLong = Math.random() * (rangeLongitudine * 2) - rangeLongitudine;
    return [randomLat + addLat, randomLong + addLong];
}
