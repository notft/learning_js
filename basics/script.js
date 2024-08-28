function calculate(){
    inputElement = document.querySelector('.js-input');
    inputvalue = Number(inputElement.value);
    outputElement = document.querySelector('.js-output'); 
    
    if(inputvalue >= 40){
      inputvalue = inputvalue;
    }
    else if(inputvalue <= 40){
      inputvalue += 20;
    }
    
    outputvalue = document.querySelector('.js-output').innerHTML = inputvalue;
  }

    console.log(name);
    let score = {wins:0,losses:0,ties:0};

    console.log(JSON.parse(localStorage.getItem('score')));
   
   if(score ===  null){
        score = {
            wins : 0,
            losses : 0,
            ties : 0
        };
   }

  function playGame(playerMove) {
    const computerMove = pickComputerMove();


    let result = '';

    if (playerMove === 'scissors') {
      if (computerMove === 'rock') {
        result = 'You lose.';
      } else if (computerMove === 'paper') {
        result = 'You win.';
      } else if (computerMove === 'scissors') {
        result = 'Tie.';
      }

    } else if (playerMove === 'paper') {
      if (computerMove === 'rock') {
        result = 'You win.';
      } else if (computerMove === 'paper') {
        result = 'Tie.';
      } else if (computerMove === 'scissors') {
        result = 'You lose.';
      }
      
    } else if (playerMove === 'rock') {
      if (computerMove === 'rock') {
        result = 'Tie.';
      } else if (computerMove === 'paper') {
        result = 'You lose.';
      } else if (computerMove === 'scissors') {
        result = 'You win.';
      }
    }
    
    if(result === 'You win.'){
        score.wins +=1;
    }
    else if(result === 'You lose.'){
        score.losses += 1;
    
    }
    else if(result === 'Tie.'){
        score.ties +=1;

    }

    localStorage.setItem('score', JSON.stringify(score));
    
    let score_msg = (`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
    Wins: ${score.wins}, Losses: ${score.losses},Ties: ${score.ties}`);

    function updatescore(){
        document.querySelector('.js-scoreboard').innerHTML = score_msg;
        document.querySelector('.js-scoreboard').innerHTML = name;
    } 
    updatescore();
}

  

  function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'scissors';
    }

    return computerMove;
  }
    