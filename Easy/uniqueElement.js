function lonelyinteger(a) {
    // Write your code here
    // input = array
    // output = return 1 int
    // loop through array 
    // compare if number at index has occured
    let sortedArray = a.sort(); 
    let uniqueElement = 0; 
    
    for(let i = 0; i < sortedArray.length; i++) {
        if(a[i] !== a[i + 1]) {
            uniqueElement = a[i];  
        } 
    }
    return uniqueElement; 

}