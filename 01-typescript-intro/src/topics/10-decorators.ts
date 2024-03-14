function classDecorator<T extends { new(...args: any[]): {} }>(construtor: T) {
    return class extends construtor {
        newProperty = 'New Property';
        hello = 'override';
    }
}


@classDecorator
class SuperClass {
    public myProperty: string = 'Abc123';

    print() {
        console.log('Hola Mundo');

    }
}

console.log(SuperClass);


const myClass = new SuperClass();
console.log(myClass);

