export class Person {
    public name: string;
    public address: string;

    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }
}


export class Hero{

    
    


    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person : Person,
    ) {
        
    }
}

// export class Hero extends Person {
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string,
//         public address: string,
//     ) {
//         super(realName, address)
//     }
// }
const tony = new Person('Tony Stark', 'New York')
const ironman = new Hero('IronMan', 45, 'Tony Stark',tony);

console.log(ironman);


