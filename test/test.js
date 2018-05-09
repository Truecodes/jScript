var assert = require('assert');
var math = require('../src/math.js');

describe('math.add()', function(){
it('should return 5 when passing in 2,3',function(){
  assert.equal(5,math.add(2,3));
});

it('should return 0 when passing in 2,-2',function(){
  assert.equal(0,math.add(2,-2));
});
});
