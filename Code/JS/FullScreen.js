function openFullscreen(which){
    
    //in base al pulsante che richiama la funzione, apre la mappa corrispondente
    switch(which){
        case 1: window.location.href = "../HTML/FullScreen.html?id=map";
                break;

        case 2: window.location.href = "../HTML/FullScreen.html?id=map2";
                break;

        case 3: window.location.href = "../HTML/FullScreen.html?id=map3";
                break;

        case 4: window.location.href = "../HTML/FullScreen.html?id=map4";
                break;

        case 5: window.location.href = "../HTML/FullScreen.html?id=map5";
                break;

        case 'home': window.location.href = "../HTML/index.html";
                break;

        //messaggio di errore per un valore non valido
        default:
                window.alert("Opzione non valida per: ", which);
                break;
    }
}