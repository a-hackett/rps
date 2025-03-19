
const body=document.querySelector("body");
const box=document.createElement("div");

const rockButton = document.createElement("button");
rockButton.textContent="Rock";
box.appendChild(rockButton);

const paperButton = document.createElement("button");
paperButton.textContent="Paper";
box.appendChild(paperButton);

const scissorsButton = document.createElement("button");
scissorsButton.textContent="Scissors";
box.appendChild(scissorsButton);
body.appendChild(box);

function getHumanChoice(){
    rockButton.addEventListener("click",()=>{
        playGame("rock");
    })
    paperButton.addEventListener("click",()=>{
        playGame("paper");
    })
    scissorsButton.addEventListener("click",()=>{
        playGame("scissors");
    })
}

function getComputerChoice(){
    let randNum = Math.random().toFixed(1); //round random number to highest tenth
    // console.log(randNum);
    let cChoice; 
    
    if (randNum>=0 && randNum<=0.2){
        cChoice="rock";
        // console.log(computerChoice);
    } 
    else if (randNum>=0.3 && randNum<=0.6){
        cChoice="paper";
        // console.log(computerChoice);
    } 
    else if (randNum>=0.7){
        cChoice="scissors";
        // console.log(computerChoice);
    }
    return cChoice;
}

function playRound(humanChoice){
    if (computerChoice === humanChoice){
        console.log("draw")
        console.log(computerChoice, humanChoice);
    } else if (computerChoice == "rock" && humanChoice == "paper"){
        humanScore++; 
        console.log(computerChoice, humanChoice);
        
    } else if (computerChoice == "rock" && humanChoice == "scissors"){
        computerScore++; //;
        console.log(computerChoice, humanChoice);           
    } else if (computerChoice == "paper" && humanChoice == "rock"){
        computerScore++; //;
        console.log(computerChoice, humanChoice);       
    } else if (computerChoice == "paper" && humanChoice == "scissors"){
        humanScore++; //;
        console.log(computerChoice, humanChoice);  
    } else if (computerChoice == "scissors" && humanChoice == "paper"){
        computerScore++; //;
        console.log(computerChoice, humanChoice);    
    } else if (computerChoice == "scissors" && humanChoice == "rock"){
        humanScore++; //;
        console.log(computerChoice, humanChoice);
    }
}

function playGame(humanChoice){
    computerChoice=getComputerChoice();
    playRound(humanChoice, computerChoice)
    let message; 

    console.log(humanScore, computerScore);

    if (humanScore==5){
        message=`You win! SCORE: Human=${humanScore} Comp=${computerScore}`;
        console.log(message);
    }else if (computerScore==5){
        message = `You Lose. SCORE: Human=${humanScore} Comp=${computerScore}`;
        console.log(message);
        humanScore=0; 
        computerScore=0;
    }

    const resultsBox = document.createElement("div");
    resultsBox.textContent=message;
    body.appendChild(resultsBox);
}


let humanScore=0, computerScore=0;
let humanChoice, computerChoice;
getHumanChoice();