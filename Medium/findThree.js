// takes in a list of numbers and returns that list with 3's in the beginning of the array

const findThree = (arr) => {
    let arr1 = [];
    let arr2 = [];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 3) {
            arr1.push(arr[i])
        }

        if(arr[i] != 3) {
            arr2.push(arr[i])
        }
    }

    for(let i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i])
    }

    return arr1; 
}

console.log(findThree([3, 1, 1, 0]))