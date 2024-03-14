

const skills : string[] = ['Bash', 'Counter','Healing'];

interface Character {
    name : string;
    hp : number;
    skills : string[];
    hometown? : string;
}


const gandalf  :  Character= {
    name : 'Gandalf' , 
    hp : 100 , 
    skills : ['Bash', 'Counter'], 
    hometown : 'Moria'
}


console.table(gandalf);

export{}