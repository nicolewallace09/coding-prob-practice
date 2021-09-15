let map = {}; 

const setCell = (cell, value) => {
    map[cell] = value;
}

const getCell = (cell) => {
    if(cell in map) {
        let value = map[cell]; 
        if(value.includes('=')) {
           let bits = value.replace('=', '').split('+');
           value = parseInt(map[bits[0]]) + parseInt(map[bits[1]]); 
        }
        return value;
    } else {
        console.log("Error, unset cell");
        return 0; 
    }
}

setCell('A1', '5')
setCell('B1', '6')
setCell('B2', '=A1+B1');
console.log(getCell('B2'))