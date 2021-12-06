function plusMinus(arr) {
    // Write your code here
    let n = arr.length; 
    let positive = 0;
    let negative = 0; 
    let zero = 0; 
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            positive++;
        }
        
        if(arr[i] === 0) {
            zero++;
        }
        
        if(arr[i] < 0) {
            negative++;
        }
    }
    
    let positiveRatio = (positive / n).toFixed(6)
    
    let zeroRatio = (zero / n).toFixed(6)
    
    let negativeRatio = (negative / n).toFixed(6)
    
    return positiveRatio + "\n" + negativeRatio +  "\n" + zeroRatio
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]))