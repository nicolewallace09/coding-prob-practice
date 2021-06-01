// outputs an array of numbers that either contains a duplicate or not
// return true if there are duplicates
// return false if there are no duplicates

const containsDuplicate = (nums) => {
    // loop through array twice to find matching numbers 
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false; 
}

console.log(containsDuplicate([1, 1, 2, 3])); // true
console.log(containsDuplicate([1, 4, 2, 3])); // false 