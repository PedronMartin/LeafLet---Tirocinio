/*
//per prima cosa interrogo il dispositivo dell'utente per vedere se è Mobile
document.addEventListener("DOMContentLoaded", function() {
    if (/Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent)) {
        //se il dispositivo è mobile, fai redirect alla versione mobile
        window.location.href = "Mobile/indexMobile.html";
    }
});
*/

//creazione mappa. fitWOrld mostra l'intero mondo sulla base dello spazio concesso nel layout della pagina
var map = L.map('map').fitWorld();

//collegamento OpenStreetMaps
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
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

    //livello di zoom massimo sull'utente
    map.setView(e.latlng, 18);
}

//funzione di errore (sulla base dell'errore generato dalla localizzazione)
function onLocationError(e) {
    switch (e.code) {
        case e.PERMISSION_DENIED:
            alert("Permesso di geolocalizzazione negato.");
            break;
        case e.POSITION_UNAVAILABLE:
            alert("Informazioni sulla posizione non disponibili. Controlla segnale GPS o connessione a Internet.");
            break;
        case e.TIMEOUT:
            alert("La richiesta di geolocalizzazione ha superato il tempo limite. Prova a ricaricare la pagina.");
            break;
        default:
            alert("Errore di geolocalizzazione generico. Riprova.");
            break;
    }
}

//funzione richiamata al premere su un popup
function onMapClick(e) {
    popup
        .setLatLng(Math.round(e.latlng))
        .setContent("Hai premuto la mappa a " + e.latlng.toString())
        .openOn(map);
}

//caricamento funzioni nella mappa
map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);
map.on('click', onMapClick);

//setting richiesta di geolocalizzazione al dispositivo
map.locate({setView: true, maxZoom: 16, timeout: 10000});