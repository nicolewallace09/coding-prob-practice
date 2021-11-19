// return the indexes of duplicate numbers

const findDuplicate = (nums) => {
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
            if(nums[i] === nums[j]) {
                return nums[i]; 
            }
        }
    }
}

const findDuplicate = (nums) => {
    nums.sort()
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == nums[i + 1]) {
            return nums[i];
        }
    }
}

const findDuplicate = (nums) => {
    let count = {}; 
    for(let i = 0; i < nums.length; i++) {
        const value = nums[i]
        if(count[value] === true) {
            return value;
        } else {
            count[value]
        }
    }
}

console.log(findDuplicate([1, 2, 2, 3, 4]))