var split = function(wholearray) {
  if (wholearray.length % 2 !== 0) {
    var firsthalf = wholearray.slice(0,(wholearray.length-1)/2)
    var secondhalf = wholearray.slice((wholearray.length-1)/2)
  }
  else {
    firsthalf = wholearray.slice(0,wholearray.length/2)
    secondhalf = wholearray.slice(wholearray.length/2)
  }
  return [firsthalf,secondhalf]
}

var merge = function(array1,array2) {
  var outputarray = []
  var longest = 0
  array1.length > array2.length ? longest = array1.length : longest = array2.length
  for (var i = 0; i <= longest-1; i++) {
    if (i >= array1.length) {
      outputarray.push(array2[i])
    }
    else if (i >= array2.length) {
      outputarray.push(array1[i])
    }
    else if (array1[i] > array2[i]) {
      outputarray.push(array2[i]);
      outputarray.push(array1[i]);
    }
    else {
      outputarray.push(array1[i]);
      outputarray.push(array2[i]);
    }
  }
  return outputarray
}

var mergeSort = function(array) {
  var newarray = split(array);
  if (newarray[0].length > 2) {
    var newerarray = []
    for (var i = 0; i < newarray.length; i++) {
      newerarray.push(split(newerarray[i])
    }
  }
}