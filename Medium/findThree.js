// given a list of numbers and returns that list with 3's in the beginning of the array

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

    // method 1 - looping through second array to add to first array
    // for(let i = 0; i < arr2.length; i++) {
    //     arr1.push(arr2[i])
    // }

    // return arr1; 

    // method 2 - destructing 
    // can return destructured arrays instead of looping through second array to add to first array
    return [...arr1, ...arr2]
}

console.log(findThree([1, 3, 3, 1, 0])) // [3, 3, 1, 1, 0]