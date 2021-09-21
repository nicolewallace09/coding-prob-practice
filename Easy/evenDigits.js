const evenDigits = (a) => {
    let positiveCounter = 0; 
    nums = a; 

    for(let num of nums) {
        let digits = 0; 

        while(num > 0) {
            digits++
            num = parseInt(num / 10); 
        }

        if(digits % 2 == 0 && digits <= 1000) {
            positiveCounter++;
        }
    }
    return positiveCounter; 
}