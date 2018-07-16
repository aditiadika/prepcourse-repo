/*
A program where you can combine several 
arrays into one array 


*/
// halo mas selamat sore
// testing 
// hello world

const first = ['Behind', 'every', 'great', 'man'];
const second = ['is', 'a','woman'];
const third = ['rolling', 'her', 'eyes']; 

//create a function using the arrow function 
let combineAll = (firstArray, secondArray, thirdArray) => {

    let newArray = firstArray.concat(secondArray, thirdArray); 

    let newString = newArray.join(' ');

    return newString; 



}; 

//execute the function and print the new value  
console.log(combineAll(first, second, third)); 
