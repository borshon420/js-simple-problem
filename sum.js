// const numbers = [33, 44, 55, 66, 77, 88];
// let sum = 0;
// for(let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     sum = sum + element;
//     console.log(element);
// }

function arrayTotal(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;
    // console.log(element);
    }
    return sum;
}

const total = arrayTotal([44, 33, 55]);
console.log('total sum', total);