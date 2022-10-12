/* L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore. */

//L’utente inserisce due numeri in successione, con due prompt
const firstUser = prompt('Inserisci il primo numero');
const secondUser = prompt('Inserisci il secondo numero');

let result;
if(firstUser > secondUser){
    console.log(firstUser);
    result = firstUser;
}else if (firstUser < secondUser){
    console.log(secondUser);
    result = secondUser;

}else {
    console.log('sono uguali');
    result = 'sono uguali';
}

//Il software stampa il maggiore.
const h1El = document.querySelector('h1');
h1El.innerHTML=`${result}`;