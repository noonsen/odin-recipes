let player;
let computer;
let result;

const playerText = document.getElementById("textPlayer");
const compText = document.getElementById("textComputer");
const resultText = document.getElementById("gameResult");




const rockBtn = document.getElementById("btn-rock");
const scissorBtn = document.getElementById("btn-scissors");
const paperBtn = document.getElementById("btn-paper")
const playerChoice = document.getElementById('playerChoice');
const computerChoice = document.getElementById('computerChoice');


rockBtn.addEventListener('click', () => getChoice("ROCK"));
scissorBtn.addEventListener('click', () => getChoice("SCISSORS"));
paperBtn.addEventListener('click', () => getChoice("PAPER"));





function getChoice(playerSelection, computerSelection){
    switch(playerSelection) {
        case "ROCK":
            playerChoice.textContent = '🪨'
            break

        case "SCISSORS":
            playerChoice.textContent = '✂️'
            break
            
        case "PAPER":
            playerChoice.textContent = '🧻'
            break
    }

    const array = ['✂️', '🧻', '🪨']
    const computerRand = array[(Math.floor(Math.random() * 3))];
    computerChoice.textContent = computerRand;
    
}





function playRound(playerSelection, computerSelection) {
    console.log("You Lose")
}


function game() {

}

