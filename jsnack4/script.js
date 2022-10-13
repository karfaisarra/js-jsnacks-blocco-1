/* In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. */

//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby
const nomePartecipanti = ['Sarra', 'hello', 'salut', 'ciao'];
//console.log(nomePartecipanti);
//chiedi all’utente il suo nome
const nome = prompt('Inserisci il tuo nome');

let i=0;
let nomi;
let valid = false;
while (i < nomePartecipanti.length) {
    nomi = nomePartecipanti[i];
    //console.log(nomi);
    if (nomi == nome ) {
        valid = true;
    }
    i++
}
if ( valid == false){
    console.log('Siamo spiacenti, non sei tra i partecipanti!');
}else{
    console.log('Benvenuto!');
}

