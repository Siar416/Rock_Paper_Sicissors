// this is for computer to play at random
function computerPlay() {
    let array = ['rock', 'paper', 'scissors'];
    random = Math.floor(Math.random()*3)
    return array[random];
}


// this plays one round of RPS
function playRound(playerSelection, computerSelection) {
    if (yourWins.textContent < 5 && computerWins.textContent < 5) {











        
    }









    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return computerWinRound;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return playerWinRound;
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        return draw;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return playerWinRound;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return computerWinRound;
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return draw;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return computerWinRound;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return playerWinRound;
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return draw;
    } else { return badSelection }
}

// event listener for buttons
    const playButtons = document.querySelectorAll('.button');

    playButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            computerPlay();
            playRound(computerSelection);
        })
    });





// score keeping
let playerScore = 0;
let computerScore = 0;
let draws = 0;





// specify rounds won with message
let playerWinRound = 'Player has won this round';
let computerWinRound = 'Computer has won this round';
let draw = 'Draw!';
let playerWin = 'Player wins the game!';
let computerWin = 'Uh-oh, computer wins the game! Better luck next time';
let badSelection = 'You didnt make a proper selection';

//for loop that plays rounds
for (let i = 0; i < 50; i++) {
    let playerSelection = prompt('Make a selection; Rock, Paper, Scissors').toLowerCase();
    const computerSelection = computerPlay();
    let roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);
    gameScore(roundResult);
    console.log('Your score is ' + playerScore);
    console.log('Computer score is ' + computerScore);
}

//Keep score and message based on score
function gameScore(result) {
    if (result === playerWinRound) {
        playerScore++;
}   else if (result === draw) {
    draws++;
}   else if (result === badSelection);

    else {
    computerScore++;
}

if (playerScore > 4) {
    console.log(playerWin);
    return;
}
if (computerScore > 4) {
    console.log(computerWin);
    return;
}
}



