//list of possible plays
const PLAYS = ["Rock", "Paper", "Scissors"];

const playButton = document.querySelectorAll(".playButton")
const pScore = document.querySelector('#pScore')
const cScore = document.querySelector('#cScore')
const status = document.querySelector('#status-bar')

let playerScore = 0;
let computerScore = 0;

let playPrompt;

playButton.forEach((button) => {
    //when button is clicked it plays a round
    button.addEventListener('click', play)
    button.addEventListener('transitionend', (e) => e.target.classList.remove('clicked'))
});

function play (e) {
    playButton.forEach((button) => disableButton(button))
    playPrompt = setTimeout(() => status.textContent = 'Rock, Paper, Scissors!!', 1500)
    e.target.classList.add('clicked')
    playerSelcetion = e.target.textContent;  //player's selection will equal to the button that is clicked
    playRound(playerSelcetion);  //plays round with player selection
    gameEnd(); //checks if the game has ended and ends the game after 5 rounds
}

function disableButton(btn) {
    btn.disabled = true;
    setTimeout(() => btn.disabled = false, 1700)
}

function playRound(playerSelcetion) {
    //computer chooses a random play from the PLAYS list
    let computerPlay = () => PLAYS[Math.floor(Math.random() * PLAYS.length)];
    const computerSelection = computerPlay();

    if (computerSelection === "Rock") {
        if (playerSelcetion === "Paper"){
            status.textContent = `you win ${playerSelcetion} beats ${computerSelection}!!`;
            playerScore++;
            pScore.textContent = `${playerScore}`
        }
        else if (playerSelcetion === computerSelection) {
            status.textContent = "its a draw!!";
        }
        else {
            status.textContent = `you loose ${computerSelection} beats ${playerSelcetion}!!`;
            computerScore++;
            cScore.textContent =`${computerScore}`
        }
    }

    if (computerSelection === "Paper") {
        if (playerSelcetion === "Scissors"){
            status.textContent = `you win ${playerSelcetion} beats ${computerSelection}!!`;
            playerScore++;
            pScore.textContent = `${playerScore}`
        }
        else if (playerSelcetion === computerSelection) {
            status.textContent = "its a draw!!";
        }
        else {
            status.textContent = `you loose ${computerSelection} beats ${playerSelcetion}!!`;
            computerScore++;
            cScore.textContent =`${computerScore}`
        }
    }

    if (computerSelection === "Scissors") {
        if (playerSelcetion === "Rock"){
            status.textContent = `you win ${playerSelcetion} beats ${computerSelection}!!`;
            playerScore++;
            pScore.textContent = `${playerScore}`
        }
        else if (playerSelcetion === computerSelection) {
            status.textContent = "its a draw!!";
        }
        else {
            status.textContent = `you loose ${computerSelection} beats ${playerSelcetion}!!`;
            computerScore++;
            cScore.textContent =`${computerScore}`
        }
    } 
}

function gameEnd() {
    if (pScore.textContent === '5' || cScore.textContent === '5') {
        if (Number(pScore.textContent) > Number(cScore.textContent)) {
            clearTimeout(playPrompt)
            status.textContent = 'CONGRATS YOU WIN!!';
            playButton.forEach((button) => {
                button.removeEventListener('click', play)
            })
        }
        else{
            clearTimeout(playPrompt)
            status.textContent = 'COMPUTER WINS!!';
            playButton.forEach((button) => {
                button.removeEventListener('click', play)
            })
        }
    }
}
