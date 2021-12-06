function miniMaxSum(arr) {
    // Write your code here
    // starting points    
    let min = arr[0];
    let max = arr[0];
    let sum = 0; 
    
    for(let i = 0; i < arr.length; i++) {
        if(max < arr[i]) {
            // setting new max
            max = arr[i]; 
        }
        
        if(min > arr[i]) {
            min = arr[i]; 
        }
        
        sum += arr[i]; 
    } 
    let maxSum = sum - min; 
    let minSum = sum - max; 
    
    console.log(minSum + " " + maxSum)
}