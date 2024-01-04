let choices = document.querySelectorAll(".choice");
let msgContainer =document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");
let userScores = document.querySelector("#userScore");
let compScores = document.querySelector("#compScore");

let userScore = 0;
let compScore = 0;

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * 3);
    return options[randomNum];
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});


const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        //draw game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            // scissors, paper

            userWin = compChoice === "paper" ? false : true;
            
            // if(compChoice === "paper"){
            //     userWin = false;
            // } else{
            //     userWin = true;
            // }

        } else if(userChoice === "paper"){
            // rock, scissors

            userWin = compChoice === "scissors" ? false : true;

            // if(compChoice === "scissors"){
            //     userWin = false;
            // } else {
            //     userWin = true;
            // }

        } else {
            // paper, rock
            
            userWin = compChoice === "rock" ? false : true;

            // if(compChoice === "rock"){
            //     userWin = false;
            // } else{
            //     userWin = true;
            // }
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

const drawGame = () => {
    msg.innerText = `Draw Game! Play again.`;
    msg.style.backgroundColor = "#000";
}


const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScores.innerText = userScore;
        msg.innerText = `you win! your ${userChoice} & computer ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else{
        compScore++;
        compScores.innerText = compScore;
        msg.innerText = `you lose, your ${userChoice} & computer ${compChoice}`;
        msg.style.backgroundColor = "red";
    }
} 