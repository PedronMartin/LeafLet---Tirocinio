//creazione mappa
var mapTrain = L.map('mapTrain').setView([45.40342369717214, 10.998998624064418], 16);

//carica OpenStreetMap e proprietà
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mapTrain);

//importo script esterno per gestione del JSON
import * as StazioniModel from './StazioniModel.js';

//funzione (await per attendere il completamento di conversione del Promise)
var stazioni = await StazioniModel.getStazioni();

//recupero la combobox tramite id
const lista = document.getElementById('StazioniList');
try {
    stazioni.forEach(stazione => {
        //crea un'opzione per ogni stazione
        const option = document.createElement('option');
        option.value = stazione.id;
        option.textContent = stazione.id;
        lista.appendChild(option); //aggiunge l'opzione alla lista
    });
} catch (error) {
    console.error('Errore nel popolare il dropdown:', error);
}

//marker di partenza
var markerPart = null;

//listener per quando l'utente seleziona il valore
lista.addEventListener('change', function() {
    //elimino, se esiste, selezioni precedenti
    if(markerPart != null)
        mapTrain.removeLayer(markerPart);
    const selectedId = lista.value;
    const selectedStazione = stazioni.find(stazione => stazione.id == selectedId);
    if (selectedStazione) {
        markerPart = L.marker(selectedStazione.coordinate).addTo(mapTrain)
            .bindPopup(`Stazione di ${selectedStazione.id}`)
            .openPopup();
            mapTrain.setView(selectedStazione.coordinate, 16);
    }
});