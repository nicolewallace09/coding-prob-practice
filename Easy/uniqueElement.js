// input = array
// output = return 1 int
// loop through array 
// compare if number at index has occurred

function lonelyinteger(a) {
    let sortedArray = a.sort(); 
    let uniqueElement = 0; 
    
    for(let i = 0; i < sortedArray.length; i++) {
        if(a[i] !== a[i + 1]) {
            uniqueElement = a[i];  
        } 
    }
    return uniqueElement; 
}

console.log(lonelyinteger([3, 3, 3, 3, 3, 2])) 