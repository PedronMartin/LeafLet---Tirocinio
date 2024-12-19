//creazione mappa
var map3 = L.map('map3').fitWorld();

//collegamento OpenStreetMaps
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map3);

var marker = null;

function askWhere(){
    
    //richiesta variabili coordinate
    var latitudine = window.prompt("Inserisci latitudine: ");
    var longitudine = window.prompt("Inserisci longitudine: ");

    //conversione in numeri
    latitudine = parseFloat(latitudine);
    longitudine = parseFloat(longitudine);

    //verifica validità delle coordinate
    if(isNaN(latitudine) || isNaN(longitudine)){
        alert("Per favore inserisci coordinate valide!");
        return;
    }

    //controllo che i valori inseriti abbiamo un senso
    if(latitudine < -90 || latitudine > 90){
        alert("Latitudine non valida! Deve essere compresa tra -90 e 90.");
        return;
    }

    if(longitudine < -180 || longitudine > 180){
        alert("Longitudine non valida! Deve essere compresa tra -180 e 180.");
        return;
    }

    if(marker != null)
        map3.removeLayer(marker);

    //aggiunge marker dove richiesto
    marker = L.marker([latitudine, longitudine]).addTo(map3);
    marker.bindPopup("<b>La tua richiesta").openPopup();

    //centra la mappa sulla posizione
    var zoomLevel = 10;
    map3.setView([latitudine, longitudine], zoomLevel);
}