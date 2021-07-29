/* Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */
let items = 5;
let numbersUser = [];

function randomNumbers (min, max){
    let numbers = [];
    while(numbers.length < items) {
        var random = Math.floor(Math.random() * ((max - min + 1)) + 1);
        if(numbers.indexOf(random) == -1 ) {   //se il numero generato randomicamente non è presente nell'array ( == -1), lo pusho 
            numbers.push(random);
        }
    }
    return numbers;
}
let arrayNumbers = randomNumbers(1,100);

alert("Numeri casuali sono: " + arrayNumbers );
/* --------------------------------------------------------------------------------------------- */

setTimeout(function(){
    for (let i = 0; i < arrayNumbers.length; i++) {
    let userChoice = parseInt(prompt("Inserisci i numeri che hai visto precedentemente, se sbagli perdi!"));
    
    if (arrayNumbers.includes(userChoice)) {
        numbersUser.push(userChoice);
        console.log(numbersUser);

    } else {
        numbersUser.push(userChoice);
        alert("Hai perso, i numeri inseriti sono: " + numbersUser);
        break;
    
    }
    
}
},1000);
/* --------------------------------------------------------------------------------------------- */


