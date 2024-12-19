![image](https://github.com/user-attachments/assets/e3e4400d-296a-4dd2-a3fb-c2f2d7026f0d)



L’obiettivo di questo tirocinio è approfondire la conoscenza della libreria Leaflet, uno strumento che permette la creazione di mappe interattive sul web. Lo scopo finale è quello di acquisire competenze sia teoriche che pratiche, orientate all’applicazione e la realizzazione di un prototipo concreto basato sulla tecnologia studiata. La comprensione delle funzionalità principali di Leaflet sarà il primo passo cruciale, al fine di costruire una base solida su cui sviluppare ulteriormente il lavoro.

Durante il tirocinio infatti, l'attenzione sarà posta inizialmente alla comprensione teorica dei concetti chiave di Leaflet, che presenta per la maggior parte elementi nuovi e da apprendere, come Javascript, HTML e nodejs. Successivamente, si procederà con la creazione di un prototipo, sfruttando le competenze acquisite e applicando in modo pratico quanto appreso.

Il monte ore di lavoro è fissato a 150, con aggiornamenti periodici sullo stato del caso studio.

Aggiornamento ore di lavoro: 100 - 110 su 150.
Attività coinvolte:
  1) Introduzione teorica a Leaflet (ricerca e studio della tecnologia);
  2) Stesura Report riassunto di quanto appreso;
  3) Creazione Repository GitHub e collegamento con Netiflty (free web hosting);
  4) Creazione di un codice d'esempio per provare Leaflet (tramite tutorial ufficiale);
  5) Apprendimento basi di HTML (tramite libro di testo e apprendimento guidato con https://www.freecodecamp.org/);
  6) Sviluppo sito vero e proprio con un mix di quanto visto finora;
  7) Apprendimento basi di JavaScript (sintassi e funzioni di base come Java), in particolare per quanto riguarda alcune funzioni di gestione della finestra HTML e il come interfacciarsi con l'utente;
  8) Creazione Script JS separati da HTML, con richiamo interno e che permetta facili modifiche;
  9) Aggiunta seconda mappa di geolocalizzazione dell'utente, con gestione dell'errore se la posizione non viene concessa e cerchio che rappresenta l'accuratezza del dato raccolto (elemento 'e' della libreria);
  10) Aggiunti per entrambe le mappe dei pulsanti che reindirizzano l'utente a delle pagine dove la mappa richiesta viene caricata in FullScreen + aggiunto popup di alert se il dato di geolocalizzazione è abbastanza da non mandare in errore ma insufficiente per calcolare una posizione accettabile come precisione;
  11) Aggiunta mappa di localizzazione delle coordinate richieste dall'utente tramite popup. FullScreen integrato anche per questa mappa;
  12) Aggiunta mappa di Routing che genera percorso richiesto dall'utente. FullScreen integrato anche per questa mappa;
  13) Aggiunta mappa in grado di creare (random) un cluster di marker all'interno di una zona delimitata (FullScreen integrato);
  14) Rilevato e corretto errore nella schermata FullScreen (dava che non caricava gli altri file delle mappe non richieste perchè erano tutte integrate nel file). Soluzione: caricamento dello script in modo dinamico tramite script interno già presente in FullScreen.html;
  15) Aggiunta mappa di ricerca semplice, tramite un DB incorporato della libreria, che permette di trovare un luogo da una
  barra di ricerca indicandone alcuni informazioni;
  16) Aggiunta mappa per la gestione di aree a diversa intensità (FullScreen integrato);
  17) Aggiunta mappa per la sovvrapposizione di immagini e video a determinate aree geografiche (FullScrenn integrato);
  18) Creata 'div' e descrizione per nuova mappa (che probabilmente porterà molto del tempo restante). Si tratta di una mappa che calcola la combinazione di possibili treni per un percorso indicato dall'utente. Per prima cosa sono andato a definire due mini-database in JSON, con qualche prototipo iniziale di dato: un file rappresenta le tratte dei treni, mentre l'altro le fermate esistenti nel sistema ferroviario (vi è quindi un incapsulamento per id tra uno e l'altro). La nuova mappa sarebbe quindi un misto di alcune delle precedenti, ma con lo scopo di ampliare la complessità dell'utilizzo di Leaflet, piuttosto che andare a lavorare sul estendere tale tecnologia nella sua implementazione già esistente.
  19) Visto il crescente numero di file, ho riordinato tutti i sorgenti in cartelle sulla base del linguaggio, modificando opportunamente i riferimenti;
  20) Potenziato DB stazioni + craeta mappa + richiesta utente stazione di partenza tramite lista riempita dal DB;

