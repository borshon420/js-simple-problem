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

/* function fibonacchi(n) {
    if(n == 0) {
        return 0;
    }
    if(n == 1) {
        return 1;
    }
    return fibonacchi(n-1) + fibonacchi(n-2);
}

const fiboElement = fibonacchi(6);
console.log(fiboElement); 
*/

function fibonacchiSeries(n) {
    if(n == 0) {
        return [0];
    }
    if(n == 1) {
        return [0, 1];
    }
    const fibo = fibonacchiSeries(n-1);
    fibo[n] = fibo[n - 1] + fibo[n - 2];
    return fibo;
}

const fiboSeries = fibonacchiSeries(6);
console.log(fiboSerise);