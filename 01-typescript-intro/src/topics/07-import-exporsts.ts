
import {Product , taxCalculation} from './06-function-destructuring'


const shoppingCart : Product[] = [
    {
        description : 'Nokia',
        price : 100
    },
    {
        description : 'Ipad',
        price : 1000
    },
    {
        description : 'Iphone',
        price : 700
    },
] ;


const [total , tax ] = taxCalculation({
    products : shoppingCart,
    tax : 0.15
});

console.log('Total', total);
console.log('Tax' , tax);




