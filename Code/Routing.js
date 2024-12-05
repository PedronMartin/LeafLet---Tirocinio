//creazione della mappa su posizione neutra
var map4 = L.map('map4').setView([45.40342369717214, 10.998998624064418], 15);

//inclusione OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 19
}).addTo(map4);

//var per memorizzare i punti selezionati e i relativi marker
var startPoint = null;
var endPoint = null;
var startMarker = null;
var endMarker = null;
var routingControl = null;

//funzione per chiedere all'utente di selezionare i punti
function askRoute() {
    //disabilita i clic sulla mappa finché non sono stati selezionati entrambi i punti
    map4.once('click', function(e) {

		//se ho routerControl != null significa che esiste già un percorso precedentemente calcolato, quindi lo eliminiamo
		if(routingControl){
			map4.removeControl(routingControl);
			map4.removeLayer(startMarker);
			map4.removeLayer(endMarker);
			routingControl = null;
			startMarker = null;
			endMarker = null;
		}

		//memorizza punto di partenza
        if(!startPoint) {
            startPoint = e.latlng;
            startMarker = L.marker(startPoint).addTo(map4)
                .bindPopup("Punto di partenza").openPopup();
        }
		//memorizza il secondo punto
		else if(!endPoint) {
            endPoint = e.latlng;
            endMarker = L.marker(endPoint).addTo(map4)
                .bindPopup("Punto di arrivo").openPopup();

            calculateRoute(startPoint, endPoint);
        }
    });
}

//funzione per calcolare il percorso tra i due punti selezionati
function calculateRoute(start, end) {

    //crea un oggetto router che calcola il percorso
    routingControl = L.Routing.control({
        waypoints: [
            L.latLng(start.lat, start.lng),
            L.latLng(end.lat, end.lng)
        ],
        routeWhileDragging: true
    }).addTo(map4);

    //pulisce i punti selezionati e disattiva mappa
    startPoint = null;
    endPoint = null;
	map4.once('click', function(e){});
}
