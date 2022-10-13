const choices = document.querySelectorAll(".choices")
const score = document.querySelector("#score")
const result = document.getElementById("result")
const modal = document.querySelector(".modal")
const restart = document.getElementById("restart")

const scoreboard = {
    player:0,
    computer:0
}

function play(e){
    restart.style.display = "inline-block"
    let playerChoice = e.target.id
    const computerChoice = getComputerChoice()
let winner = getWinner(playerChoice,computerChoice)
showWinner(winner,computerChoice)
}

function getComputerChoice(){
    const randomNumber = Math.random()
    if(randomNumber<0.33)
    return "rock";
else if(randomNumber>0.33 && randomNumber<0.66)
return "paper";
else
return "scissors";
}

function getWinner(pc,cc){
    
    if(pc == cc)return 'draw'
    if(pc== "rock"){
        if(cc == 'paper'){
            return "computer"
                }else{
                    return "player"
                }
    }
if( pc== "paper"){
    if(cc=="scissors"){
        return "computer"
        }else {
            return "player"
        }
}
if(pc == "scissors"){
    if(cc =="rock"){
        return "computer"
    }else {
        return "player"
    }
}
}

function showWinner(winner,computerChoice){
if(winner == "player"){
    scoreboard.player++;
    result.innerHTML = `<h1 class="text-win"> You Win </h1>
    <i class = "fas fa-hand-${computerChoice} fa-10x"></i>`

 }else if(winner == "computer"){
scoreboard.computer++;
    result.innerHTML = `<h1 class="text-lose"> You Lose </h1>
    <i class = "fas fa-hand-${computerChoice} fa-10x"></i>`

 }else {

    result.innerHTML = `<h1 class="text-win"> its a Draw </h1>
    <i class = "fas fa-hand-${computerChoice} fa-10x"></i>`
 }

 score.innerHTML =`
 <p>Player: ${scoreboard.player}</p>
 <p>computer: ${scoreboard.computer}</p>
 `
 modal.style.display = "block"

}


function clearModal(e){
    if(e.target == modal){
    modal.style.display ="none"
}
}

for(let i=0;i<choices.length;i++){
    choices[i],addEventListener("click",play)

}

function restartHandler(){
    scoreboard.player = 0;
    scoreboard.computer =0
    score.innerHtml =`
    <p>Player : 0 </P>
    <p>Computer : 0</p>
    `
}

window.addEventListener("click",clearModal)
restart.addEventListener("click",restartHandler)