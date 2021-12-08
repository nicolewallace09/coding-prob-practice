// child will only be able to blow out the tallest candle on their birthday
// they are only given number of candles for their age 
// return the number of candles that are the tallest


function birthdayCakeCandles(candles) {
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

console.log(birthdayCakeCandles([3, 2, 1, 3])) // 2 