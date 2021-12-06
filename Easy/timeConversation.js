function timeConversion(s) {
    // Write your code here
    // 12 AM => 0
    // 1 AM to 12PM => keep the same 
    // 1 PM to 11PM => add 12 
    let amPm = s.charAt(8); 
    let militaryHour = ''; 
    
    // AM 
    if(amPm == "A") {
        if(s.substring(0,2) == "12") {
            militaryHour = "00"; 
        } else {
            // original hour 
            militaryHour = s.substring(0,2)
        }
    // PM 
    } else {
         if(s.substring(0,2) == "12") {
            militaryHour = s.substring(0,2)
        } else {
            // convert to integer 
            militaryHour = parseInt(s.substring(0,2), 10) + 12; 
        }
    }
    return militaryHour + s.substring(2, 8)
    
}