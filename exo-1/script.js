// you can write js here
console.log('hello from file');

// const kelvins = 294;
const kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");
console.log(kelvins);

const celsius = kelvins - 273; // on déclare une constante nommé celsuis qui prend en valeur le résultat de la valeur de la constante kelvins moin 273.
console.log(celsius);

const fahrenheits = celsius * (9/5) + 32; // on déclare une constante nommé fahrenheits qui prend en valeur le résultat de la valeur de la constante celsius multiplié par neuf cinquième plus trente-deux. 
console.log(fahrenheits);

// il y as plusieurs façon d'appliquer .floor() :
const fahrenheitsPrime = Math.floor(celsius * (9/5) + 32);
console.log(fahrenheitsPrime);

// ou 
console.log(Math.floor(fahrenheits));

// ou encore
function rounded(temperature){
    return Math.floor(temperature);
}
console.log(rounded(fahrenheits));