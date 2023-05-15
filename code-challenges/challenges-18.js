'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    // write your code here
   let strArray=str.split(" ");
   let arraylength=0;
   if(strArray.length%2 !=0){
    arraylength=strArray.length+1;
   }
   else{arraylength=strArray.length;}
    let middle=(arraylength/2)-1;
     let wordlength=0;
     let mid=strArray[middle].split("");
     for (let y = 0; y < mid.length; y++) {
        wordlength++;
}
return wordlength;
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    // write your code here
    let check = false;
    if (str1.length === str2.length) {
        let str1Array = str1.split("");
        let str2rray = str2.split("");
        let count1 = 0;
        let count2 = 0;
        for (let i = 0; i < str1Array.length; i++) {
            let leter = str1Array[i];
            count1++;
            str1Array.shift();

            for (let y = 0; y < str1Array.length; y++) {
                if (str1Array[y] === leter) {
                    count1++;
                }}
                for (let y = 0; y < str2rray.length; y++) {
                    if (str2rray[y] === leter) {
                        count2++;
                    }

                }
            
            if(count1 !== count2){return check;}
        }
        return true;
    }
    else { return check; }
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    // write your code here
}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };