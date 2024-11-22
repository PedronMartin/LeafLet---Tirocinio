function openFullscreen(which){
    
    //in base al pulsante che richiama la funzione, apre la mappa corrispondente
    switch(which){
        case 1: window.location.href = "FullScreen.html?script=CaVignal.js&html=map";
                break;

        case 2: window.location.href = "FullScreen.html?script=YourLocation.js&html=map2";
                break;

        case 3: window.location.href = "index.html";
                break;

        //messaggio di errore per un valore non valido
        default:
                window.alert("Opzione non valida per 'which':", which);
                break;
    }
}
/*
function WhatMap(){
        //ottiene URL completo della pagina corrente
        const currentUrl = document.location.pathname;

        //estrae il nome del file HTML (parte finale dell'URL)
        const fileName = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);

        switch(filename){
                case index.html: return 1;
                                break;
                case FullScreen
        }

}*/