var assert = require('assert');
var fib = require('../src/fib.js');

describe('fibonacci()',function(){
it('should return 1, when passing in 1',function(){
  assert.equal(2,fib.fibonacci(2));

});
it.skip('should return 1 for the first number', function() {
      expect(fibonacci(0)).to.equal(1);
    });
    it.skip('should return 1 for the second number', function() {
          expect(fibonacci(1)).to.equal(1);
        });
    it.skip('should return 13 for index 6', function() {
          expect(fibonacci(6)).to.equal(13);
        });
    it.skip('should return 0 for negative index', function() {
          expect(fibonacci(-1)).to.equal(0);
        });
});
