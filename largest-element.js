function largestElement(numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if(element > largest){
            largest == element;
        }  
    }
    return largest;
}

const ages = [12, 14, 53, 34, 54, 43];
const oldest = largestElement(ages);
const oldest2 = largestElement([-11, -13, -10])
console.log('oldest', oldest2);