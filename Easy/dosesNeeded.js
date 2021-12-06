function hurdleRace(k, height) {
    // get max value from height array
    const maxHeight = Math.max(...height);
    // get number of doses needed by character
    const doseNeeded = maxHeight - k;
    
    // return doseNeeded or 0 if doseNeeded is lower than 0, meaning k is enough
    return Math.max(0, doseNeeded);
}