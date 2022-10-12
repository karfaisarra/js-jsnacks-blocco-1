/* L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga */

//L’utente inserisce due parole in successione, con due prompt.
const firsWord = prompt('Inserisci la prima parola');
const secondWord = prompt('Inserisci la seconda parola');

if (firsWord.length > secondWord.length){
    console.log('la parola piu lunga è: ', firsWord );
} else if (firsWord.length < secondWord.length){
    console.log('la parola piu lunga è: ', secondWord );
}else {
    console.log('le parole hanno la stessa lunghezza ');
}
//Il software stampa prima la parola più corta, poi la parola più lunga