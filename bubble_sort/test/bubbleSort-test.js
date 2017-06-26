const assert = require('chai').assert;
const bubbleSort = require('../bubbleSort');

describe('bubble sort testing', function() {
    it('is a function', function() {
      assert.isFunction(bubbleSort);
    });

    it('returns an array', function() {
      assert.isArray(bubbleSort([]));
    });

    it('can compare values to sort', function() {
      assert.deepEqual(bubbleSort(["d", "b", "a", "c"]), ["a", "b", "c", "d"]);
    });
});
