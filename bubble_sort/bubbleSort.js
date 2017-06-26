function bubbleSort(collection) {
  var length = collection.length - 1;
  do {
    var swapped = false;
    for (var i = 0; i < length; i++) {
      if(collection[i] > collection[i+1]) {
        var holder = collection[i];
        collection[i] = collection[i+1];
        collection[i+1] = holder;
        swapped = true;
      }
    }
  }
  while (swapped === true);
  return collection;
}

module.exports = bubbleSort;
