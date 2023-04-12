'use strict';

// -------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  Required:
//
//  Write a function that takes an array and returns the maximum value in the provided array
//  without using build-in functions.
//  
// Input: [12, 32, 22, 45, 78, 12, 50]
// Output: 78
//  

const findMax = (arr)=>{
    let max;
    // write your code here
   max=arr[0];
   for(let i=1;i<arr.length;i++){
    if(arr[i]>max){max=arr[i];}
   }
    return max;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 02:
//  Required:
//
//  Write a function that takes an arrays and returns the Sum of the numeric values
//  inside the array (there could be strings inside), without using built-in functions
//  
// Input: [20, '234', 'car', 41, 20, 'chair']
// Output: 81
//  

console.log("hi"*0)
const sumNums = (arr)=>{
    let sum=0;
    // write your code here
    let numArray=[];
    let num=0;
    for(let i=0;i<arr.length;i++){
     if (num*arr[i]===0 && (arr[i] !==`${arr[i]}`)){
        numArray.push(arr[i]);
        console.log(arr[i]);
     }
       }
       
       for(let y=0;y<numArray.length;y++){
        sum=sum+numArray[y];
       }
    return sum;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 03:
//  optional:
//
//  Write a function that takes an array and returns the array reversed
//  without using built-in functions
//  
// Input: ['C#', 'JS', 'Ruby','Python'] 
// Output: ['Python','Ruby','JS','C#']

const reverseArray = (arr)=>{
    // write your code here
}
// -------------------------------------------------------------------------------------------------------

module.exports = {findMax , sumNums, reverseArray};