// function reverseArray(arr) {
//   for(var i =0; i < arr.length/2; i++){
//     let other = arr.length -i -1;
//     let temp = arr[i];
//     arr[i] = arr[other];
//     arr[other] = temp;
//   }
//   return arr;
// }

// function moreThanOnce(str) {
//   let results = [];
//   for (var i = 0; i < str.length; i++) {
//     let counter = 0;
//     for (var j = 0; j < str.lengthl j++){
//       if (str[j] === str[i]) {
//         counter++;
//       }
//     }
//     if(counter > 1 && results.indexOf(str[i]) === -1) {
//       results.push(str[i]);
//     }
//   }

//   return results;
// }

// console.log(moreThanOnce('this is a string'));


// // 1. Write a function that takes as input an array of integers. Return the sum of the integers. What is the complexity of your algorithm?

//   function sumOfInt(...args) {
//     return args.reduce((a,b) => {
//       return a+b;
//     }, 0);
//   }
// console.log(sumOfInt(1,2,3));


// // 2. Write a function that takes as input an array of integers. Return the largest integer in the array.
// // What is the complexity of your algorithm?

  function lgInt(...args) {
    
  }

// // 3. Write a function that takes as input a string and a character (a string of length 1). Return the number of occurrences of that character in the string. What is the complexity of your algorithm?
// // 4. What is the advantage of sorting an array in place? Is is always preferred to sort in place?
// // 5. What is the time and space complexity of inserting an array into a linked list?
// // 6. What is time and space complexity of inserting an element into an array?
// // 7. You have a set of a data and you need to decide if it is better to use an array or a linked list to store it. What criteria will you base your decision on?
// // 8. What is the maximum amount of memory available in a web browser?
// // 9. How do we free allocated memory that we don’t need anymore?
// // 10. What is a memory leak? How do memory leaks occur?
// // 11. In JavaScript, can we sort a string in place? If so, implement a function that sorts a string in place. If not, explain why.