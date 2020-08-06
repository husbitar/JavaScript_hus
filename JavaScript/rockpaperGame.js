const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  } else {

    console.log('Worng input!!!');
  }
};

const getComputerChoice = ()=> {
  const randomNumber = Math.floor(Math.random() * 3);
  //const randomNumber = 0;
  switch (randomNumber){
    case 0 :
       return 'rock';
    case 1 :
      return 'paper';
    case 2 :
      return 'scissors';
  }
}
//console.log(getComputerChoice(),getUserChoice());
const determineWinner = (userChoice, computerChoice)=>{
  if (userChoice === computerChoice){
    //console.log('Its a tie');
    return 'Its a tie';
  }
  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return 'Computer won';
    } else {return 'User won';}
  }
    if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return 'Computer won';
    } else {return 'User won';}
  }

    if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return 'Computer won';
    } else {return 'User won';}
  } else { return '!!!bomb YOU WON!!!';}
}
const playGame = ()=>{


const userChoice= getUserChoice('bomb');
const computerChoice= getComputerChoice();
console.log(`User = ${userChoice}, Computer = ${computerChoice}`);
console.log(determineWinner(userChoice, computerChoice));
}
playGame();

//console.log(determineWinner(getComputerChoice(),getUserChoice()));
