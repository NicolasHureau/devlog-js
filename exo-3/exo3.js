// you can write js here
console.log('exo-3');

const answer = [
    "pierre",
    "papier",
    "ciseaux"
];

function getPlayerChoice(){
    let playerInput = prompt("Votre choix (pierre, papier, ciseaux)?");
    playerInput = playerInput.toLowerCase();
    if(playerInput == "bomb"){
        return "bomb";
    }
    return answer[getChoicePower(playerInput)];
}

function getComputerChoice(){
    return answer[Math.floor(Math.random()*3)];
}

function getChoicePower(playerChoice){
    for(let i=0;i<answer.length;i++){
        if(playerChoice == answer[i]){
            return i;
        }
    }
    console.log("Votre choix n'est pas valide.");
    playGame();
}

function findWinner(playerChoice,computerChoice){
    if(playerChoice == "bomb"){
        return "MichaelBayMode = ON, vous avez tous fait péter!!!";
    }
    playerChoice = getChoicePower(playerChoice);
    computerChoice = getChoicePower(computerChoice);

    if(playerChoice == computerChoice){
        return "ex aequo";
    }
    if(playerChoice == 2 && computerChoice == 0){
        return "La pierre brise les ciseaux, c'est perdu.";
    }
    if(playerChoice == 0 && computerChoice == 2){
        return "La pierre brise les ciseaux, c'est gagné!";
    }
    if(playerChoice < computerChoice){
        return answer[computerChoice]+" bat "+answer[playerChoice]+" c'est perdu.";
    }
    if(playerChoice > computerChoice){
        return answer[playerChoice]+" bat "+answer[computerChoice]+" c'est gagné!";
    }
}

function playGame(){
    let uChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    console.log(uChoice,computerChoice);
    console.log(findWinner(uChoice,computerChoice));
    playGame();
}

playGame();