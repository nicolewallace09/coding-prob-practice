function bonAppetit(bill, k, b) {
    // Write your code here
    // bill = array the cost of items
    // k = int representing index of item Anna doesn't eat
    // b = amount of money anna contributed to the bill 
    let totalBill = 0; 
    let totalActual = 0; 
    let overcharged = 0; 
 
    
    // getting total cost of bill 
    for(let i = 0; i < bill.length; i++) {
        // cost bill charged anna for total half of bill 
        totalBill += bill[i];
    }
    // b actual 
    totalActual = (totalBill - bill[k]) / 2; 

    if((b - totalActual) == 0) {
        console.log("Bon Appetit")
    } else {
        console.log(overcharged = (b - totalActual)); 
    }
}

bonAppetit([3,10,2,9], 1, 12) // 5 