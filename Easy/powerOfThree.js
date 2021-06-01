// given an integer n, return true if it is a power of three
// otherwise, return false.
// an integer n is a power of three, if there exists an integer x such that n == 3x.

const isPowerOfThree = (n) => {
    let i = 1;
    
    while(i < n) {
        i *= 3;
    }
    return i === n;
};

console.log(isPowerOfThree(27)); 