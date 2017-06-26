function insertionSort(collection) {
  var length = collection.length;

    for (var i = 1; i < length; i++) {
      var number = collection[i];
      var n = i-1;
      while(n >= 0 && collection[n] > number) {
        collection[n+1] = collection[n];
        n--;
      }
      collection[n+1] = number;
    }
    return collection;
}

module.exports = insertionSort;
