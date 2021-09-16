const business = 450;
const minister = 550;
const army = 600;
// if(business > minister) {
//     console.log('Business r pola is bigger');
// }
// else {
//     console.log('Minister r pola is bigger')
// }

// compare 3
// if(business > minister && business > army){
//     console.log('business r pola is bigger');
// }
// else if(minister > business && minister > army) {
//     console.log('misnister r pola is bigger');
// }
// else {
//     console.log('army is bigger')
// }



var max = Math.max(business, minister, army);
console.log('largest number is', max);

function findLargest(first, second){
    if(first > second){
        return first;
    }
    else {
        return second;
    }
}