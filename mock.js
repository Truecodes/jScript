module.exports = {


mocking:function(num){
var result,randomNumber;
},

rolldie: function (){
  var diceresult =[];
for (var i = 0; i<=5;i++)
{
   randomNumber = Math.floor((Math.random() * 6)+1);
   diceresult.push = randomNumber;
   diceresult.sort();
   console.log(diceresult);
}
console.log(diceresult);
  return randomNumber;
 }
};
