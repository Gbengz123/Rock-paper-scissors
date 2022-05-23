//list of possible plays
const PLAYS = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;


function main() {
    //collect number of rounds from user and covert it to int.
    let rounds = prompt("how many rounds are you playing: ");
    rounds = parseInt(rounds);

    //check if user input is a number
    if (Number.isInteger(rounds) === false){
        alert("refresh and enter valid number!");
        return 1;
    }

    //play game with the number of rounds inputed
    game(rounds);

    if (playerScore > computerScore) {
        console.log("YOU WIN!!");
        alert("YOU WIN!!");
        return 0;
    }
    else if (playerScore === computerScore){
        console.log("ITS A DRAW!!");
        alert("ITS A DRAW!!");
        game(1);
        return 0;
    }
    else {
        console.log("COMPUTER WINS!!");
        alert("COMPUTER WINS!");
        return 0;
    }
}

function game (ROUNDS) {
    //authenticate a valid play
    let validPlay = (pSelcetion) => (PLAYS.includes(pSelcetion));

    for(let i = 0; i < ROUNDS; i++) {
        let userPlay = prompt("whats your play rock, paper or scissors: ");
        const playerSelcetion = userPlay.toLowerCase();

        if (validPlay(playerSelcetion)) {
            console.log(`you played ${playerSelcetion}`)

            //selects random play from PLAYS and stores it in computerSelection
            let computerPlay = () => PLAYS[Math.floor(Math.random() * PLAYS.length)];
            const computerSelection = computerPlay();
            console.log(`computer played ${computerSelection}`)

            //plays one round
            playRound(playerSelcetion, computerSelection);
        }
        else {
            alert("invalid play enter \"rock, paper or scissors\"");
            ROUNDS++;
        } 
    }
}

function playRound(player, computer) {
    if (computer === "rock") {
        if (player === "paper"){
            console.log(`you win ${player} beats ${computer}`);
            playerScore++;
            return;
        }
        else if (player === computer) {
            console.log("its a draw");
            return;
        }
        else {
            console.log(`you loose ${computer} beats ${player}`);
            computerScore++;
            return;
        }
    }

    if (computer === "paper") {
        if (player === "scissors"){
            console.log(`you win ${player} beats ${computer}`);
            playerScore++;
            return;
        }
        else if (player === computer) {
            console.log("its a draw");
            return;
        }
        else {
            console.log(`you loose ${computer} beats ${player}`);
            computerScore++;
            return;
        }
    }

    if (computer === "scissors") {
        if (player === "rock"){
            console.log(`you win ${player} beats ${computer}`);
            playerScore++;
            return;
        }
        else if (player === computer) {
            console.log("its a draw");
            return;
        }
        else {
            console.log(`you loose ${computer} beats ${player}`);
            computerScore++;
            return;
        }
    }
} 

main();