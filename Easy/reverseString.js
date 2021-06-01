// function that reverses a string 
// input string is given as an array 

const reverseString = (s) => {
    let left = 0;
    let right = s.length - 1; 
    
    while(left < right) {
        const newString = s[left]; 
        s[left] = s[right];
        s[right] = newString;
        
        left++
        right--
    }
};

console.log(reverseString(["N", "i", "c", "o", "l", "e"]));
