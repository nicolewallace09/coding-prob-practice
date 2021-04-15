// given a number, return it's factorial 
// will range from 1-18
// always return an integer 
// example if num = 4 -- (4 x 3 x 2 x 1) return 24

var firstFactorial = function(num) {
    // start at 1 because 0 will result in a zero value 
    let factors = 1; 

    // <= num because we want to include number being passed in 
    for(var i = 1; i <= num; i++) {
        // add factors to be multiplied and return the factors 
        factors = factors * i;
    }
    return factors; 
}

console.log(firstFactorial(4)); 





var firstFactorial = function(num) {
    var factors = 1;

    for(var i = 1; i <= num; i++) {
        factors = factors * i;
    }
    return factors; 
}