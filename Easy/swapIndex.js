let swap = function(arr, first_index, second_index) {
    if(first_index < arr.length && second_index < arr.length) {
      let temp = arr[first_index];
      arr[first_index] = arr[second_index];
      arr[second_index] = temp; 
    }
  };