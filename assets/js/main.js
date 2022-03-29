/* Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo. */


const listEmail = ["ivadham.smay3649@gmail.com", "mymail@gmail.com","john-s@yahoo.com"];
const mailUtente = prompt("Insert your mail Address?!");

let answer = document.getElementById("answer");

// Stampa un messaggio appropriato sull’esito del controllo.
answer.innerHTML = "Sorry, your mail address does not exist"

for(let i = 0; i < listEmail.length; i++) {

    if(mailUtente === listEmail[i]){
    //Se l'utente è nella mia lista stampa "L'indirizzo email è corretto."
       let correct = "Your mail address is correct";
       answer.innerHTML = correct;
    }
}

