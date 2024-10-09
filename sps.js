let compscore = 0;
let userscore = 0;
let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");

const getCompChoice = ()=>{
    let options = ["rock","paper","scissors"];
    let CompChoice = Math.floor(Math.random()*3);
    return options[CompChoice];
}
const showWinner = (userWin)=>{
    if(userWin){
        userscore++;
        userscorePara.innerText  = userscore;
        console.log("you win!!");
        msg.innerText = "you win the game 😎";
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compscorePara.innerText  = compscore;
        console.log("you lose");
        msg.innerText = "you lose the game 🥲/try again";
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userChoice)=>{
    console.log(userChoice);
    const CompChoice = getCompChoice();
    console.log(CompChoice);

    if(userChoice===CompChoice){
        console.log("the game was draw");
        msg.innerText = "the game was draw 😐";
        msg.style.backgroundColor = "grey";
    }
    else {
        let userWin = true;
        if(userChoice === "rock"){
         userWin =  CompChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper" ){
         userWin =  CompChoice ==="scissors" ? false : true  ;
        }
        else {
            userWin = CompChoice === "rock" ? false : true ; 
        }
        showWinner(userWin);
    }
};
choices.forEach((choice) =>{
   const userChoice= choice.getAttribute("id");
    choice.addEventListener("click",()=>{
    playgame(userChoice);
    });
});