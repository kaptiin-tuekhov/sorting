var bubbleSort = function(array) {
  do {
    var sortcount = 0;
    for (var i = 0; i < array.length-1; i++) {
      if (array[i] > array[i+1]) {
        var greater = array[i];
        array[i] = array[i+1];
        array[i+1] = greater;
        sortcount++
      }
    }
  } while(sortcount > 0);
  return array
}