let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score")
const compScorepara = document.querySelector("#computer-score")


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
});


const playGame = (userChoice) => {
    const compchoice = genCompChoice();
  
    if (userChoice === compchoice) {
        drawGame();

    } else {

        let userWin = true;
        if (userChoice === "rock") {
            userWin = compchoice === "paper" ? false : true;

        } else if (userChoice === "paper") {
            userWin = compchoice === "scissors" ? false : true

        } else {
            userWin = compchoice === "rock" ? false : true
        }
        showWinner(userWin,userChoice,compchoice);
    }
}


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]
}


const drawGame = () => {
    msg.innerText = "Game was Draw. Play Again"
    msg.style.backgroundColor = "#081b31";
}


const showWinner = (userWin, userChoice, compchoice) => {
    if (userWin) {
        userScore ++;
        userScorepara.innerText = userScore;
        msg.innerText = `You win.Your ${userChoice} beats ${compchoice}`
        msg.style.backgroundColor = "green";
        
    } else {
        compScore ++;
        compScorepara.innerText = compScore;
        msg.innerText = `You lost. ${compchoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red";
    }
}