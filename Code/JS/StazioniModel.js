//path del sorgente DB
const jsonUrl = 'DB/StazioniDB.json';

//funzione per caricare i dati JSON
export async function getStazioni() {
    try {
        //recupero file JSON
        const conversione = await fetch(jsonUrl);
        if (!conversione.ok)
            throw new Error('Errore nel recupero delle stazioni');

        //converte i dati dal formato JSON
        var model = await conversione.json();
        return model.stazioni;
    } catch (error) {
        console.error('Errore:', error);
        return [];
    }
}



