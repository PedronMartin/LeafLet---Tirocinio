function openFullscreen(which){
    
    //in base al pulsante che richiama la funzione, apre la mappa corrispondente
    switch(which){
        case 1: window.location.href = "FullScreen.html?html=map";
                break;

        case 2: window.location.href = "FullScreen.html?html=map2";
                break;

        case 3: window.location.href = "FullScreen.html?html=map3";
                break;

        case 'home': window.location.href = "index.html";
                break;

        //messaggio di errore per un valore non valido
        default:
                window.alert("Opzione non valida per: ", which);
                break;
    }
}