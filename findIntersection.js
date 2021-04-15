// takes in a parameter containing two elements 
// two elements will contain a list of numbers in ascending order separated by commas 
// return common numbers in a string with commas separating the numbers
// example ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"] output: 1,4,13

function FindIntersection(strArr) { 

    let newArr = []; 
    let str1 = strArr[0].split(', '); 
    let str2 = strArr[1].split(', ');

    // console.log(str1) // returns [ '1', '3', '4', '7', '13' ]
    // console.log(str2) // returns [ '1', '2', '4', '13', '15' ]
  
    // loop through the first string
    for(let i = 0; i < str1.length; i++) {
      if(str2.includes(str1[i])) {
        newArr.push(str1[i]);
      }
    }
  
    if(newArr.length > 0) {
      return newArr.join(',')
    }
    // code goes here  
    return false; 

    
  
  }

console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));


