/* Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti */

//Il software deve chiedere per 10 volte all’utente di inserire un numero.
const parola1 = Number(prompt('Inserisci un numero'));
const parola2 = Number(prompt('Inserisci un numero'));
const parola3 = Number(prompt('Inserisci un numero'));
const parola4 = Number(prompt('Inserisci un numero'));
const parola5 = Number(prompt('Inserisci un numero'));
const parola6 = Number(prompt('Inserisci un numero'));
const parola7 = Number(prompt('Inserisci un numero'));
const parola8 = Number(prompt('Inserisci un numero'));
const parola9 = Number(prompt('Inserisci un numero'));
const parola10 = Number(prompt('Inserisci un numero'));
//la somma di tutti i numeri inseriti
const result = parola1 + parola2 + parola3 + parola4 + parola5 + parola6 + parola7 + parola8 + parola9 + parola10 ;
//stampo il risultato
const h1El = document.querySelector('h1');
h1El.innerHTML=`${result}`;