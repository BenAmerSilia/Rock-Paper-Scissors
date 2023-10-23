function getComputerChoice(){
    let computerChoice = Math.random();
    if (computerChoice > 0 && computerChoice < 1/3){
        computerChoice = "rock";
    }
    else if (computerChoice >= 1/3 && computerChoice <= 2/3){
        computerChoice = "paper";
    }
    else if (computerChoice >= 2/3){
        computerChoice = "scissors";
    }
        return(computerChoice);
}


function getPlayerChoice(){
    let playerChoice = prompt("What will you play?").toLowerCase;
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper"){
        alert ("You Lose! Paper beats Rock");
    }
    else  if (playerSelection == "rock" && computerSelection == "rock"){
        alert ("Draw");
    }
    else  if (playerSelection == "rock" && computerSelection == "scissors"){
        alert ("You Win! Rock beats Paper");
    }
  }
  getComputerChoice();
  getPlayerChoice();
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();

 

  
  console.log(playRound(playerSelection, computerSelection));
// Add a click event listener to the button
/*button.addEventListener('click', getComputerChoice);
const button = document.getElementById('myButton');*/
