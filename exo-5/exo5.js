// you can write js here

console.log('exo-5');

let input = prompt("Que voulez-vous traduire en baleine?");
const vowels = ["a","e","i","o","u","y"];
let resultArray = new Array;

for(i=0;i<input.length;i++){
    console.log(input[i]);
    // if(vowels.indexOf(input[i])!==-1){
    //     resultArray.push(input[i]);
    // }
    for(j=0;j<vowels.length;j++){
        if(input[i] == vowels[j]){
            resultArray.push(input[i]);
        }
    }
}

console.log(resultArray);
console.log(resultArray.join("").toUpperCase());