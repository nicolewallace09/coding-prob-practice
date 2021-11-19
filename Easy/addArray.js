let array = [] // 3

const addAll = (array) => {
    if(array.length === 0) {
        return 0;
    }

    let sum = 0;

    for(let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum; 
}

console.log(addAll(array))