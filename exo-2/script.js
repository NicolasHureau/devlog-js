// you can write js here
console.log('exo-2');

const isTesting = true;

const week = [
    "Le jour du repos du guerrier.",
    "Le week-end est fini! Au boulot!",
    "On en est encore loin.",
    "C'est le jour des enfants, tu n'en est plus un.",
    "On as fait la moitié!",
    "Un dernier effort, on touche au but!",
    "C'est le week-end! Apéro!!!"
];

const semaine = [
    "DIMANCHE",
    "LUNDI",
    "MARDI",
    "MERCREDI",
    "JEUDI",
    "VENDREDI",
    "SAMEDI"
];

if (isTesting){
    const jour = prompt("Quel jour somme nous?").toUpperCase();
    let i = 0;
    while (jour !== semaine[i]){
        i++;
    }
    const day = i;
    const hour = prompt("Quelle heure est-il?");
    isWeekEndSoon(day,hour);
}else{
    const myDate = new Date();
    const day = myDate.getDay();
    const hour = myDate.getHours()
    isWeekEndSoon(day,hour);
}

function isWeekEndSoon(day, hour){
   if(day == 5 && hour >= 17){
        console.log(week[day+1]);
    }else if(day == 1 && hour < 9){
        console.log(week[day-1]);
    }else{
        console.log(week[day]);
    } 
}