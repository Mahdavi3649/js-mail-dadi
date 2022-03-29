/* Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo. */


//const mailUtente = prompt("Insert your mail Address?!");


let answer = document.getElementById("answer");
const send = document.getElementById("send");

send.addEventListener("click", function() {
    
    let success = false;
    const listEmail = ["ivadham.smay3649@gmail.com", "mymail@gmail.com","john-s@yahoo.com"];
    const mailUtente = document.getElementById("mail").value;

    for(let i = 0; i < listEmail.length; i++) {

        if(mailUtente === listEmail[i]){
           success = true;
        } 
    }

    if(success) {
        // Se l'utente è nella mia lista stampa "L'indirizzo email è corretto."
        let correct = "Your mail address is correct";
        answer.innerHTML = correct;

    } else {
         let uncorrect = "Sorry, your mail address does not exist"
          answer.innerHTML = uncorrect;

    }
});






