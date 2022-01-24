// nums = array of numbers
// size = size of subarray to count 

const maxSubArraySum = (nums, size) => {
    let currSum = 0; 
    let maxSum = 0; 

    // infinity is a property of the global object and is greater than any other number
    for(let i = 0; i < nums.length; i++) {
        currSum += nums[i]; 

        // will compare index of 2 if size is 3 
        if(i >= size - 1) {
            // compares and find maximum value 
            maxSum = Math.max(currSum, maxSum)
            currSum -= nums[i - (size - 1)]
        }
    }
    return maxSum; 
}

const arr = [1, 2, 3, 5, 4, 8, 6, 2] // 18
const arr2 = [5, 1, 3, 2, 11, 5, 7, 8] // 23

console.log(maxSubArraySum(arr2, 3)); 