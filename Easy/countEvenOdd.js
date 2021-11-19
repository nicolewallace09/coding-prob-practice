const more = (array) => {
    let even = 0;
    let odd = 0;

    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            even++
        } else {
            odd++
        }
    }

    if(even > odd) {
        return "even";
    } else {
        return "odd"; 
    }
}
 
console.log(more([1, 2, 3, 3, 3, 4])); // odd
console.log(more([2, 2, 2, 3, 3, 4])); // even