const assert = require('chai').assert;
const insertionSort = require('../insertionSort');

describe('insertion sort testing', function() {
    it('is a function', function() {
      assert.isFunction(insertionSort);
    });

    it('returns an array', function() {
      assert.isArray(insertionSort([]));
    });

    it('can compare values to sort', function() {
      assert.deepEqual(insertionSort([1, 0, 4, 3, 2]), [0, 1, 2, 3, 4]);
    });
});
