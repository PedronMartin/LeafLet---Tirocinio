//creazione della mappa centrata sull'Università di Verona
var map6 = L.map('map6').setView([45.40342369717214, 10.998998624064418], 16);

//aggiunta del layer OpenStreetMap alla mappa
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> Contributors',
    maxZoom: 18,
}).addTo(map6);

//configurazione del controllo di ricerca
var options = {
    collapsed: false,                   //permette la ricerca fin dall'inizializzazione della mappa
    position: 'topright',               //posizione del controllo nella mappa
    text: 'Ricerca',                    //testo del pulsante per avviare la ricerca
    placeholder: 'luogo da ricercare',  //testo interno della barra di ricerca
};

//creazione del controllo di ricerca con le opzioni specificate + inserimento in mappa
var osmGeocoder = new L.Control.OSMGeocoder(options);
map6.addControl(osmGeocoder);
