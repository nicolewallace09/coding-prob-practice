// return the indexes of duplicate numbers

const findDuplicate1 = (nums) => {
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
            if(nums[i] === nums[j]) {
                return nums[i]; 
            }
        }
    }
}

const findDuplicate2 = (nums) => {
    nums.sort()
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == nums[i + 1]) {
            return nums[i];
        }
    }
}

const findDuplicate3 = (nums) => {
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

console.log(findDuplicate3([1, 2, 2, 3, 4]))