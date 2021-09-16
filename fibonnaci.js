// 0, 1, 1, 2, 3, 5, 8, 13

/*
3rd = 2nd + 1rst
4th = 3rd + 2nd
5th = 4th + 3rd
6th = 5th + 4th
16th = 15th + 14th
119 = 118th + 117th
nth = (n-1)th + (n-2)th 
*/

/* const fibo = [0, 1];
for(let i = 2; i <= 10; i++) {
    // nth = (n-1)th + (n-2)th 
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo); */

/* function fibonacchiSeries(num) {
    const fibo = [0, 1];
    for(let i = 2; i <= num; i++){
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

const fiboSerise = fibonacchiSeries(13);
console.log(fiboSerise); */

function fibonacchiSeries(num) {
    if(typeof num != 'number') {
        return 'please give a number';
    }
    if(num < 2) {
        return 'please enter a positive number grather than 1';
    }
    const fibo = [0, 1];
    for(let i = 2; i < num; i++){
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

const fiboSerise = fibonacchiSeries(3);
console.log(fiboSerise);