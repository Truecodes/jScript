module.exports = {
fizzbuzzcalc:function(num){
var result;

var remainder3 = num%3;
var remainder5 = num%5;

for (var i = 1 ; i <= 6; i++)
  {
  if ((remainder5 == 0) && (remainder3 == 0))
   {
     result = 'fizz buzz';
   }
    else if (remainder3 == 0)
    {
      result = 'fizz';
    }
    else if (remainder5 == 0)
    {
      result = 'buzz';
    }

    else {
      result = num;
    }

  }
//   if (num == 1)
// {
//   result = 1;
// }
// else if (num == 2)
// {
//   result = 2;
// }
// else if (num == 3)
// {
//   if (remainder3 == 0)
//   {
//   result = 'fizz';
//   }
// }
// else if (num == 4)
// {
//   result = 4;
// }
// else if (num == 5)
// {
//   if (remainder5 == 0)
//   {
//     result = 'buzz';
//   }
// }
// else if (num == 6)
// {
//   if (remainder3 == 0)
//   {
//     result = 'fizz';
//   }
// }
// else {
//       result = 0;
//     }
//for (var i=1; i <= 20; i++)
//{
  //  if (i % 15 == 0)
    //    console.log("FizzBuzz");

    //else if (i % 3 == 0)
    //    console.log("Fizz");

    //else if (i % 5 == 0)
      //  console.log("Buzz");

    //else
      //  console.log(num);
return result;
  //    }
    }
};
