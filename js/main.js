// GENERAZIONE NUMERI CASUALI PC SENZA NUMERI DOPPI
var listaDoppioniPc = [];

var size = 16;

while (listaDoppioniPc.length < size) {
    var number = getRandomNumber(1, 100) 

    if (! listaDoppioniPc.includes(number)) {
        listaDoppioniPc.push(number);
    }
}

console.log(listaDoppioniPc);

// RICHIEDI ALL'UTENTE DOVE VUOI FAR INSERIRE I NUMERI

for (var i = 0; i < 86; i++) {
    var numUtente = parseInt(prompt('Inserisci un numero') );
    
}






// FUNZIONI 

// FUNZIONE PER GENERARE NUMERI CASUALI
function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}