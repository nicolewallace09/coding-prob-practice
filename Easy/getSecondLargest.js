// getSecondLargest has the following parameters
// int nums[n]: an array of integers
// create a variable for largestNum, secondLargest
// loop through the nums 
// compare numbers to get the largest
// compare number to get secondLargest
// return

function getSecondLargest(nums) {
    // Complete the function
    let largestNum = 0;
    let secondLargest = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > largestNum) {
            secondLargest = largestNum; 
            largestNum = nums[i]; 
        }
        
        if(nums[i] < largestNum && nums[i] > secondLargest) {
            secondLargest = nums[i]
        }
    }
    return secondLargest; 
}

console.log(getSecondLargest([4,5,6,7,8]))