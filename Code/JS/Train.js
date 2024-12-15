//creazione mappa
var map6 = L.map('map6').setView([45.40342369717214, 10.998998624064418], 16);

//carica OpenStreetMap e proprietà
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map6);

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
        option.textContent = stazione.nome;
        lista.appendChild(option); //aggiunge l'opzione alla lista
    });
} catch (error) {
    console.error('Errore nel popolare il dropdown:', error);
}

//listener per quando l'utente seleziona il valore
lista.addEventListener('change', function() {
    const selectedId = lista.value;
    const selectedStazione = stazioni.find(stazione => stazione.id == selectedId);
    if (selectedStazione) {
        L.marker(selectedStazione.coordinate).addTo(map6)
            .bindPopup(`Stazione di ${selectedStazione.nome}`)
            .openPopup();
        map6.setView(selectedStazione.coordinate, 16);
    }
});