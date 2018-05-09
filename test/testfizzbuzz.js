
  var assert = require('assert');
  var fiz = require('../src/fizzbuzz.js');

 describe('fizzbuzzcalc()',function(){

   
   it('should print 1 for 1',function(){
         var actual = fiz.fizzbuzzcalc(1);

         assert.equal (actual,1);
       });


           it('should print 2 for 2',function(){
                 var actual = fiz.fizzbuzzcalc(2);

                 assert.equal (actual,2);
               });
              it('should print fizz for 3',function(){
                     var actual = fiz.fizzbuzzcalc(3);

                     assert.equal (actual,'fizz');
                   });
                   it('should print 4 for 4',function(){
                         var actual = fiz.fizzbuzzcalc(4);

                         assert.equal (actual,4);
                       });
                       it('should print buzz for 5',function(){
                              var actual = fiz.fizzbuzzcalc(5);

                              assert.equal (actual,'buzz');
                            });
                            it('should print fizz for 6',function(){
                                   var actual = fiz.fizzbuzzcalc(6);

                                   assert.equal (actual,'fizz');
                                 });
});
