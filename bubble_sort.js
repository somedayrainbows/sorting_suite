var numbers = [5, 0, 1, 3, 4, 2]

var sortedNumbers = numbers.sort(function (a,b) {
  return a - b;
});

console.log("Your numbers have been compared and sorted from the original array to a new array in ascending order. Here's your new sorted array: " + sortedNumbers + " Excellent!")
