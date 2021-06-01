// given a non-empty array of decimal digits representing a non-negative int
// increment to one 
// each element in the array contain a single digit
// assume the int does not lead with a zero, unless it is 0 itself 

var plusOne = function(digits) {
    // start at end of the array; zero or less; increment backwards 
    for(var i = digits.length-1; i >= 0; i--) {
        // if digits is less than 9, add to the digit 
        if(digits[i] < 9) {
            digits[i] = digits[i] + 1;
            return digits; 
        } else {
            // if it more than 9, replace with 0
            digits[i] = 0; 
        }
    }
    // adds one to the previous number 
    digits.unshift(1); 
    return digits; 
}

console.log(plusOne([1,2,3])); 
console.log(plusOne([1,2,9]));


 























