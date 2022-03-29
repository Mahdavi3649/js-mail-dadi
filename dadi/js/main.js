//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

let player_number = Math.floor(Math.random() * 6) + 1;
console.log("Numero giocatore: " + player_number);

document.getElementById("dado_player").innerHTML = ("Dado Player: " + player_number)


let pc_number = Math.floor(Math.random() * 6) + 1;
console.log("Numero computer: " + pc_number);
document.getElementById("dado_pc").innerHTML = ("Dado Computer: " + pc_number)


if(player_number > pc_number){
    document.getElementById("match").innerHTML = ("Player have won the Game")

}else if (player_number < pc_number){
    document.getElementById("match").innerHTML = ("Computer have Won the Game")

} else{
    document.getElementById("match").innerHTML = ("Tied the game.")
}