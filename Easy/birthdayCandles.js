function birthdayCakeCandles(candles) {
    // Write your code here
    let tallest = 0; 
    let count = 0; 
    
    for(let i = 0; i < candles.length; i++) {
        if(tallest < candles[i]) {
            tallest = candles[i];
        }
        
        if(tallest == candles[i]) {
            count++;
        }
    }
    return count;
}