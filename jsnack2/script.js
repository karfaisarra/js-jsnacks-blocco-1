/* L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga */

//L’utente inserisce due parole in successione, con due prompt.
const firsWord = prompt('Inserisci la prima parola');
const secondWord = prompt('Inserisci la seconda parola');

let result;
if (firsWord.length > secondWord.length){
    //console.log('la parola piu lunga è: ', firsWord );
    result = firsWord;
    
} else if (firsWord.length < secondWord.length){
    //console.log('la parola piu lunga è: ', secondWord );
    result= secondWord;

}else {
    //console.log('le parole hanno la stessa lunghezza ');
    result= 'le parole hanno la stessa lunghezza '
}
//console.log(result);
//Il software stampa prima la parola più corta, poi la parola più lunga
const h1El = document.querySelector('h1');

if(result == firsWord){
    h1El.innerHTML=`${result} ${secondWord}`;
}else if (result == secondWord){
    h1El.innerHTML=`${result} ${firsWord}`;
}else{
    h1El.innerHTML=`le parole hanno la stessa lunghezza`;
}