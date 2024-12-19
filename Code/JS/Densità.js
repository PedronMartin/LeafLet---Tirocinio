//inizializzazione mappa
var map7 = L.map('map7').setView([45.4384, 10.9928], 14); // Centro di Verona

//aggiunta del layer OpenStreetMap
var tileLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map7);

//FUNZIONE AUSILIARIA: caricamento dati da DB
const jsonUrl = "DB/Studenti_univr_DB.json";
async function getFeatures() {
    try {
        //recupero file JSON
        const conversione = await fetch(jsonUrl);
        if (!conversione.ok)
            throw new Error("Errore nel recupero delle locazioni nel file" + jsonUrl);

        //converte i dati dal formato JSON
        var model = await conversione.json();
        return model.features;
    } catch (error) {
        console.error("Errore:", error);
        return [];
    }
}

//inizializzazione array per i dati completi
var addressPoints = [];

//funzione principale (deve attendere il caricamento completo del json)
async function HeatMap(){

    //caricamento del file GeoJSON
    var features = await getFeatures();

    //ciclo attraverso le feature del GeoJSON
    features.forEach(function (feature) {
        var coordinate = feature.geometria.coordinate;                  //estraggo coordinate
        densita = feature.proprietà.densita || 1;                   //estraggo valore densità, default 1
        addressPoints.push([coordinate[0], coordinate[1], densita]);    //inizializzo nell'array i punti con i dati
    });

    //creazione della HeatMap
    L.heatLayer(addressPoints, {
        radius: 30,     //raggio di influenza dei punti
        blur: 25,       //sfocatura per rendere la mappa più fluida
        maxZoom: 16,
    }).addTo(map7);

    //aggiunta alla mappa
    map7.attributionControl.addAttribution(" | HeatMap studenti - Università di Verona");
}

//avvio processo
HeatMap();