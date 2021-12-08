var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
  var guess;

  while (max > min) { 
    guess = max + min / 2 
    
    if (array[guess] == targetValue) {
      return guess; 
    } else if (array[guess] < targetValue) {
      min = guess + 1
    } else {
      max = guess -1 
    }
  }
	return -1;
};

console.log(doSearch([1, 2, 3, 4, 5, 6], 4))