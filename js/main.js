/* Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */
let items = 5;

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

alert("Numeri casuali sono: " + arrayNumbers);
/* --------------------------------------------------------------------------------------------- */
let confirm = false
if (window.confirm("Da ora hai 30 secondi per indovinare i numeri")) {
    confirm = true;
    revereCount();
  }
  console.log(revereCount());

/* --------------------------------------------------------------------------------------------- */
function revereCount() {
    let timer = 30;
     clock = setInterval(function() {
        timer--;
        console.log(timer)
    },1000)
    
} 
/* --------------------------------------------------------------------------------------------- */
function userNumber() {
    let numbersUser = [];
    for (i = 1; i < arrayNumbers.length; i++) {
        let userChoice = parseInt(prompt("Inserisci il numero"));
        if (arrayNumbers.includes(userChoice)) {
            numbersUser.push(userChoice);
            continue;

        } else {
            alert("Hai perso, i numeri inseriti sono: " + numbersUser);
            break;
            
        }
       
        
    }

}


