let personHinzufuegen;
(function () { // IIFE

    // Anwendung soll erst starten, wenn vollstaendig geladen
    document.addEventListener('DOMContentLoaded', starteApp, false);

    // Event-Handler global bekannt machen
    personHinzufuegen = onClickPersonHinzufuegen;


    /*** START-Funktion ***/
    function starteApp() {
        const tabelle = findeElement('table tbody');
        const teilnehmerListe = gibTeilnehmerListe();

        teilnehmerListe.forEach(teilnehmer => {
            tabelle.appendChild(erzeugeZeileFuerTeilnehmer(teilnehmer));
        });
    }

    function onClickPersonHinzufuegen() {
        const neuerTeilnehmer = {
            vorname: findeElement('#vorname').value,
            name: findeElement('#name').value,
            email: findeElement('#email').value
        };
        gibTeilnehmerListe().push(neuerTeilnehmer);
        findeElement('table tbody').appendChild(erzeugeZeileFuerTeilnehmer(neuerTeilnehmer));
    }


    /*** HILFSFUNKTIONEN ***/

    // Erzeugt eine HTML-Tabellenzeile fuer ein Teilnehmer-Objekt
    function erzeugeZeileFuerTeilnehmer(teilnehmer) {
        const zeile = erzeugeZeile();
        zeile.appendChild(erzeugeZelle(teilnehmer.vorname));
        zeile.appendChild(erzeugeZelle(teilnehmer.name));
        zeile.appendChild(erzeugeZelle(teilnehmer.email));

        return zeile;
    }

    // Erzeugt eine leere HTML-Tabellenzeile 
    function erzeugeZeile() {
        return document.createElement('tr');
    }

    // Erzeugt eine Zelle mit dem gegebenen Inhalt
    function erzeugeZelle(inhalt) {
        const textNode = document.createTextNode(inhalt);
        const zelle = document.createElement('td');
        zelle.appendChild(textNode);

        return zelle;
    }

    function findeElement(selector) {
        return document.querySelectorAll(selector)[0];
    }

    // Gibt das Array mit den Teilnehmern zurueck
    function gibTeilnehmerListe() {
        return [
            {
                vorname: 'Albert',
                name: 'Einstein',
                email: 'albert@einstein.de',
            }
        ];
    }

})();
