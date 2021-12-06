function sockMerchant(n, ar) {
    // n = number of socks in the pile 
    // ar = array of colors of each sock 
    // return number of pairs of socks 
    let colorMatch = 0; 
    ar.sort();
    
    for(let i = 0; i < n; i++) {
        if(ar[i] == ar[i + 1]) {
            i++
            colorMatch++
        }
    }
    return colorMatch; 
}