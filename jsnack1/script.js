/* L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore. */

//L’utente inserisce due numeri in successione, con due prompt
const firstUser = prompt('Inserisci il primo numero');
const secondUser = prompt('Inserisci il secondo numero');

if(firstUser > secondUser){
    console.log(firstUser);
}else if (firstUser < secondUser){
    console.log(secondUser);
}else {
    console.log('sono uguali');
}

//Il software stampa il maggiore.