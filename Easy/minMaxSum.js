function miniMaxSum(arr) {
    // Write your code here
    // starting points    
    let min = arr[0];
    let max = arr[0];
    let sum = 0; 
    
    for(let i = 0; i < arr.length; i++) {
        // checking to see if current max is less than arr[i]
        if(max < arr[i]) {
            // setting new max
            max = arr[i]; 
        }
        
        // checking to see if current min is greater than arr[i]
        if(min > arr[i]) {
            // setting new min 
            min = arr[i]; 
        }
        // total sum of arr 
        sum += arr[i]; 
    } 
    // taking total sum and minus mix/max values to get mix/max sum 
    let maxSum = sum - min; 
    let minSum = sum - max; 
    
    console.log(minSum + " " + maxSum)
}