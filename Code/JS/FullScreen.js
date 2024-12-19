function openFullscreen(which){
    
    //in base al pulsante che richiama la funzione, apre la mappa corrispondente
    switch(which){
        case 1: window.location.href = "FullScreen.html?id=map";
                break;

        case 2: window.location.href = "FullScreen.html?id=map2";
                break;

        case 3: window.location.href = "FullScreen.html?id=map3";
                break;

        case 4: window.location.href = "FullScreen.html?id=map4";
                break;

        case 5: window.location.href = "FullScreen.html?id=map5";
                break;
        
        case 6: window.location.href = "FullScreen.html?id=map6";
                break;

        case 7: window.location.href = "FullScreen.html?id=map7";
                break;

        case 8: window.location.href = "FullScreen.html?id=map8";
                break;

        case 9: window.location.href = "FullScreen.html?id=map9";
                break;

        case 10: window.location.href = "FullScreen.html?id=map10";
                break;

        case 'home': window.location.href = "index.html";
                break;

        //messaggio di errore per un valore non valido
        default:
                window.alert("Opzione non valida per: ", which);
                break;
    }
}