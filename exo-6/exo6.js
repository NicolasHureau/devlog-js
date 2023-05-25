// Cours 8 de Codecademy
console.log("exo-6");

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe
console.log(joeInfo.cars.length);

// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.
joeInfo.bathrooms = 1;
console.log(joeInfo.bathrooms);

// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information. 
joeInfo.garage = true;
console.log(joeInfo.garage);


let team = new Object();
team.players = new Array();
team.games = new Array();

team.players = [
    {
        firstname: "Nicolas",
        lastname: "Hureau",
        age: 42
    }
];
team.games = [
    {
        opponent: "KMH",
        teamPoints: 12,
        opponentPoints: 27
    },
];

team.addPlayer = (firstname,lastname,age) => {
    team.players.push({
        firstname: firstname,
        lastname: lastname,
        age: age
    });
};
team.addGame = (opponent,teamPoints,opponentPoints) => {
    team.games.push({
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
    });
};

team.addPlayer("Ezra","W",37);
team.addPlayer("Romain","Steak",35);
team.addGame("Brille",19,15);
team.addGame("WORLD COOK",25,17);

team.meanPoint = (targetPoints) => {
    let point = 0;
    for(i=0;i<team.games.length;i++){
        point += team.games[i][targetPoints];
    }
    return "La moyenne des "+targetPoints+" est de : "+point/team.games.length;
};

console.log(team.meanPoint("teamPoints"));
console.log(team.meanPoint("opponentPoints"));

team.olderPlayer = () => {
    let old = 0;
    let player = 0;
    for(i=0;i<team.players.length;i++){
        if(team.players[i].age > old){
            old = team.players[i].age;
            player = i;
        }
    }
    return "\n Le joueur le plus vieux est "+team.players[player].firstname+" qui a "+team.players[player].age+" ans";
};

console.log(team.olderPlayer());

team.playersAlphbetical = () => {
    console.log("\n Voivi la liste des joueur par ordre alphabétique :");
    team.players.sort((a,b) =>{
        if(a.firstname > b.firstname){
            return 1;
        }
        return -1;
    })
    team.players.forEach( i => {
        console.log(i.firstname);
    });
}

team.playersAlphbetical();

console.log(team);