// outputs the string representation of numbers from 1 to n. 
// multiples of 3 should output "Fizz"
// multiples of 5 should output "Buzz"
// multiples of 3 and 5 should output "FizzBuzz"

const fizzBuzz = (n) => {
    // create an empty array
    let arr = [];
    // create an empty string 
    let str = ''; 

    // loop through the array 
    for(let i = 1; i <= n ; i++) {
        if(i % 5 == 0 && i % 3 == 0) {
            str = 'FizzBuzz';
        } else if(i % 3 == 0) {
            str = 'Fizz';
        } else if(i % 5 == 0) {
            str = 'Buzz'; 
        } else {
            str = i.toString();
        }
        arr.push(str);
    }
    return arr;
}

console.log(fizzBuzz(5)); 
console.log(fizzBuzz(15)); 