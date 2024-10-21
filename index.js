// 1 ) reverse a string 
// input : "hello "
// output : "olleh"



// function reverseString(str) {
    
//     let charArray = str.split('');
    
//     let reversedArray = charArray.reverse();
    
//     let reversedString = reversedArray.join('');
    
//     return reversedString;
// }

// let input = "hello";
// let output = reverseString(input);
// console.log(output);  



// 2) check if a string is palindrome 
// input : "racecar"
// output : true 



// function ispalindrome(str){



// let inputstr = str.split('').reverse().join('')
// return inputstr === str 
// }
// console.log(ispalindrome("racecar"));


// 3) find the maximum in an array 
// input : [1,5,3,9,2]
// output : 9 


// function findmaxvalue(arr){
//     let max = arr[0] 

//     for(i = 0 ; i<arr.length ; i++){
//         if(arr[i] > max){
//         max = arr[i]
//         }
//     }
//     return max ;
// }
// console.log(findmaxvalue([1,5,3,9,2]));

// 4) sum of array elements 
// input : [1,2,3,4]
// output : 10 


// function totalsum (arr){
//     let sum = 0 

//     for (i = 0 ; i< arr.length ; i++ ){
//         sum +=arr[i]
//     }
//     return sum 

// }
// console.log(totalsum([1,2,3,4]));

// 5) first non-repeating character 
// input : "aabbccdeff"
// output: "b"


// function nonrepeating(){
    
        
//         let frequencyMap = {};
    
//         for (let i = 0; i < str.length; i++) {
//             let char = str[i];
//             frequencyMap[char] = (frequencyMap[char] || 0) + 1;
//         }
    
// }

// 6) find the second largest element in an array 
// input : [5,7,2,9,3]
// output :7 



// function secondLargest(arr) {
    
//     arr.sort(function(a, b) {
//         return b - a; 
//     });

    
//     return arr[1]; 
// }


// let input = [5, 7, 2, 9, 3];
// let secondMax = secondLargest(input);
// console.log(secondMax);  

// 7)check if array is sorted 
// input : [1,2,3,4,5]
// output : true 


// function isArraySorted(arr) {
    
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] > arr[i + 1]) {
        
//             return false;
//         }
//     }


//     return true;
// }

// let input = [1, 2, 3, 4, 5];
// let result = isArraySorted(input);
// console.log(result);  

// 8) count vowels in a string 
// input : "hello"
// output : 2 



// function checkvowel(str){
//     let count = 0 
//     let vowels = "aAeEIiOoUu"

//     for (i=0 ; i<str.length ;i++){
//         if(vowels.includes(str[i])){
//             count ++ ;
//         }
//     }
//     return count

// }
// console.log(checkvowel("helloe"));


// 9) find the index of a target in an array 
// input :[1,2,3,4] , target = 3
// output : 2 



// function findindex(arr,target ){
//     // let result =[]
//     for (i=0 ; i<arr.length ; i++){
//         if(arr[i]===target){
//             return i
//         }
    
//     }
// }
// console.log(findindex([1,2,3,4] , 3));



// 10) remove duplicates from array 
// input : [1,2,2,3,4,4,5]
// output : [1,2,3,4,5]



// function removeDuplicates(arr) {
    
//     const uniqueElements = [];

    
//     for (let i = 0; i < arr.length; i++) {
    
//         if (!uniqueElements.includes(arr[i])) {
        
//             uniqueElements.push(arr[i]);
//         }
//     }

    
//     return uniqueElements;
// }


// let input = [1, 2, 2, 3, 4, 4, 5];
// let output = removeDuplicates(input);
// console.log(output);  



// 11) find missing number in an array 
// input: [1,2,4,5]
// output: 3 



// function findMissingNumber(arr) {
//     let n = arr.length + 1;
//     let expectedSum = (n * (n + 1)) / 2;
//     let actualSum = arr.reduce((a, b) => a + b, 0);
    
//     return expectedSum - actualSum;
//   }
  
  
//   console.log(findMissingNumber([1, 2,  4, 5]));  

// 12) find intersection of two arrays
// input : [1,2,3] and [2,3,4]
// output : [2,3]




// function findIntersection(arr1, arr2) {
    
//     const set1 = new Set(arr1);
    

//     const intersection = [];

    
//     for (let i = 0; i < arr2.length; i++) {
//         if (set1.has(arr2[i])) {  
//             intersection.push(arr2[i]);  
//         }
//     }

//     return intersection; 
// }

// let array1 = [1, 2, 3];
// let array2 = [2, 3, 4];
// let result = findIntersection(array1, array2);
// console.log(result);  





// 13) check if two strings are Anagrams 
// input : "listen " and "silent"
// output : true 







// 15) find the frequency of elements in an array 
// input:[1,2,2,3,3,3]
// output : {1:1 , 2:2 , 3:3}



// function findFrequency(arr) {
    
//     const frequencyMap = {};

    
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
      
//         frequencyMap[element] = (frequencyMap[element] || 0) + 1;
//     }

//     return frequencyMap;
// }


// const inputArray = [1, 2, 2, 3, 3, 3];


// const result = findFrequency(inputArray);
// console.log(result);  




// 16) check ia a number is prime 
// input : 7 
// output : true 


// function isPrime(n) {
    
//     if (n <= 1) return false;
    

//     if (n === 2) return true;
    
    
//     if (n % 2 === 0) return false;

    
//     const limit = Math.sqrt(n);
//     for (let i = 3; i <= limit; i += 2) {
//         if (n % i === 0) {
//             return false; 
//         }
//     }

    
//     return true;
// }


// const inputNumber = 99;
// const result = isPrime(inputNumber);
// console.log(result)








// 17  ) find the factorial of a number 
// input : 5 
// output: 120 


// function factorial(n) {
    
//     if (n <= 1) return 1;


//     return n * (n - 1);
// }


// const inputNumber = 5;

// const result = factorial(inputNumber);
// console.log(result)



// 18 ) find the fibonacci number at position n 
// input : n = 5 
// output : 5 
