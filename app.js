/*Variables */
const rockBtn = document.querySelectorAll('.button');
const results = document.querySelector('.results');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const playBtn = document.querySelector('.play');
let score = 0;
let score2 = 0;

/*Function that chooses a random number and returns
either rock, paper, or scissors based on the number */
const computer = () => {
 const random = Math.random();

 if(random < 0.34){
  return "Rock"
 }

 else if(random < 0.63){
    return "Paper"
 }

 else{
   return "Scissors";
 }
}
/*Check if the score is equal to 5, if its
not, continue playing game */
const checkScore = () => {
 if(score === 5 || score2 === 5)
  playGame(e);
}

/*Disables buttons for rock, paper scissors */
const disable = () => {
  rockBtn.forEach(item => {
    item.disabled = true;
  })
}

/*Enables buttons*/
const enable = () => {
 rockBtn.forEach(item => {
  item.disabled = false;
 })
}

const win = () => {

  /*If the score is equal to 5, state 
  the player wins and disable the buttons */
  if(score === 5){
    results.innerHTML = "Player Wins";
    disable();
  }
  /*If the computer score is equal to 5, state
  the computer wins and disable the buttons */
  else if(score2 === 5){
    results.innerHTML = "Computer Wins";
    disable();
  }
}
const playGame = (event) => {
    
    /*Targets the dataset */
    const playerSelection = event.target.dataset.id;
    let computerSelection = computer();
  

  
  if(playerSelection === computerSelection){
    results.textContent = "its a tie";

    win();
  }

   if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Scissors" && computerSelection === "Rock") ||
    (playerSelection === "Paper" && computerSelection === "Scissors")
  ) {
     results.innerHTML = `You Chose ${playerSelection} and Computer chose ${computerSelection}, Computer Wins`
     score2++;
     computerScore.textContent = score2
     win();
   } else if(playerSelection === "Paper" && computerSelection === "Rock" ||
  playerSelection === "Scissors" && computerSelection === "Paper" ||
  playerSelection === "Rock" && computerSelection === "Scissors"
  ){
    results.innerHTML = `You Chose ${playerSelection} and Computer chose ${computerSelection}, You win`
    score++
    playerScore.textContent = score
    win();
  }  
  }


/*Resets the game and enables the buttons */
const resetGame = (e) => {
 playerScore.innerHTML = '0';
 computerScore.innerHTML = '0';
 score = 0;
 score2 = 0;
 results.innerHTML = '';
 playGame(e)
 enable();

}

/*Plays the game */
rockBtn.forEach(item => {
 item.addEventListener('click', (e) => {
   playGame(e)

 })
})

rockBtn.forEach(item => {
  item.addEventListener('click', (e) => {
    playGame(e)
  })
})


 
playBtn.addEventListener('click', resetGame);


 

