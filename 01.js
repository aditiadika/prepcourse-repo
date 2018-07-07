/*
01.js 
Palindrome 
This is a program which lets you reverse a string 


*/

let firstString = "ibu ratna antar ubi"; 

function reverseWords(words){

    //split the words using a split() method 
    var splitWords = words.split(""); 

    //reverse the words using a reverse() method 
    var reverseTheArray = splitWords.reverse();
    
    //combine all characters using a join() method 
    var joinTheArray = reverseTheArray.join("");

    //return the new value which has been modified 
    return joinTheArray; 

}

console.log(reverseWords(firstString)); 
