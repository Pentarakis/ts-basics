
// Anwendung soll erst starten, wenn vollstaendig geladen
document.addEventListener('DOMContentLoaded', starteApp, false);


/*** START-Funktion ***/
function starteApp() {
    const table = _findElement('table tbody');
    const characterListe = _getCharacterList();

    characterListe.forEach(character => {
        _addCharacterToTable(character, table);
    });
}

function addCharacter() {
    const newCharacter = {
        name: _findElement('#name').value,
        culture: _findElement('#culture').value
    };
    const table = _findElement('table tbody');
    _addCharacterToTable(newCharacter, table);
    _getCharacterList().push(newCharacter);
}


/*** HILFSFUNKTIONEN ***/
function _addCharacterToTable(character, table) {
    const row = table.insertRow();
    const cellName = row.insertCell(0);
    const cellCulture = row.insertCell(1);
    cellName.innerText = character.name;
    cellCulture.innerText = character.culture;
}

function _findElement(selector) {
    return document.querySelectorAll(selector)[0];
}

// Gibt das Array mit den Teilnehmern zurueck
function _getCharacterList() {
    return [
        {
            name: 'Albert Einstein',
            culture: 'Deutsch',
        }
    ];
}
