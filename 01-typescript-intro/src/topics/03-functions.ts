
// function addNumbers(a :number , b : number){

// const suma = a+b;

// console.log('La suma es :',suma);

// }

// const addNumbersRow = (a :number , b : number) => {
//     return a + b;
// }

// function multiply (firstNumber :number , seconNumber? : number, base : number = 2) { 
//     return firstNumber * base;
// }

// const result : number = addNumbersRow(2,2);
// const multiplyResult : number = multiply(5);
// console.log({result});
// console.log({multiplyResult});

// addNumbers(1,2);

interface Character {
    name : string;
    hp : number ;
    showHp : () => void;
}

const healCharacter = (character  :Character , amount : number ) => {
    character.hp += amount;
}

const strider : Character = {
    name : 'Strider',
    hp : 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
        
    },
}
healCharacter(strider , 10);
healCharacter(strider , 30);
strider.showHp();


export{}