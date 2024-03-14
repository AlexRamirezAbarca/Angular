export interface Passenger {
    name : string;
    children? : string[];
}


const passenger1 : Passenger = {
    name : 'Alex'
}
const passenger2 : Passenger = {
    name : 'Alberto',
    children : ['Emma', 'Sofia']
}


const printChildren = (passenger :Passenger) : number => {
    
    const howManyCHildren = passenger.children?.length || 0;

    console.log(passenger.name , '-' , howManyCHildren);
    
    return howManyCHildren;
}

printChildren(passenger2);
printChildren(passenger1);