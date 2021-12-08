// given an array see if the array contains more even or odd numbers
// create variables for even and odd
// loop through array to find if each number is even or odd, add those to variables
// compare the numbers in the variables and return higher value 


const more = (array) => {
    let even = 0;
    let odd = 0;

    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            even++
        } else {
            odd++
        }
    }

    if(even > odd) {
        return "even";
    } else {
        return "odd"; 
    }
}
 
console.log(more([1, 2, 3, 3, 3, 4])); // odd
console.log(more([2, 2, 2, 3, 3, 4])); // even