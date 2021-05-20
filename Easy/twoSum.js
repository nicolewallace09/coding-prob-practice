// given an array of integers
// return indices of the two numbers that add up to a specific target
// can not contain duplicates 

var twoSum = function(nums, target) {
    // loop twice to find two numbers 
    for(var i = 0; i < nums.length; i++) {
        // start at i + 1 because numbers cannot be duplicates 
        for(var j = i + 1; j < nums.length; j++ ) {
            if(nums[i] + nums[j] === target) {
                // return the indices where the nums are in the array 
                return [i,j]
            }
        }
    }
}

console.log(twoSum([1,2,3,4],3));
console.log(twoSum([1,2,3,4],7));
