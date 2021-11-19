const longestWord = (array) => {
    let longest = '';

    for(let i=0; i < array.length; i++) {
        if(array[i].length > longest.length) {
            longest = array[i]
        }
    }
    return longest;
}

console.log(longestWord(['one', 'two', 'superduper', 'dog'])); // superduper
console.log(longestWord(['hello', 'world'])); // hello
console.log(longestWord(['boo', 'a', 'I', 'hi'])); // boo