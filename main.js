//problem1: number of vowels in a string(130pt)
function countVowel(str) { 
  // find the count of vowels
  const count = str.match(/[aeiou]/gi).length;
  console.log(count);

  // return number of vowels
  
  if (count.tostr()===null){
    return("no vowel found:0");
  }

  return("number of vowels:",count);

}
// take input
const string = prompt('Enter a string: ');
const result = countVowel(string);
//  publish result
console.log("number vowel found:",result);

//problem2:Sum of numbers from 0 to N(130pt)
SequenceSum= function(countt){
    let sum = 0;
    let input = '';
    if (countt === 0) return '0=0'
    if (countt < 0) return `${countt}<0`
    for(let i = 0; i <= countt; i++){
      if(i == countt){
        input += String(i);
        console.log("result is:",input)
      }else {
      input += String(i) + '+';
      console.log("result is:",input)
      }
      sum = sum + i;
    }
    let tab=[input,sum];
    return tab;
};
// take input
  const number = prompt('Enter a number: ');
  var tabb = SequenceSum(number);
// publish result
  console.log(tabb[0],"=",tabb[1]);


//problem3:remove the minimum of an array (130pt)
removeSmallest=function(arr) {
  var min=0;
  var ind=0;
  var n=arr.length;
  var newtab=Array(n-1);
  min=arr[0];
  for(let i = 1; i <= n; i++){
    if (arr[i]<min){
      min=arr[i];
      ind=i;
    }
  }
  console.log("valeur min du tableau",min);
  console.log("indice",ind);

for(let i = 0; i <= n-2; i++) {
 if (i!=ind){
    newtab[i]=arr[i];
 }
for (let i = ind; i <= n-2; i++)
{
  newtab[i]=arr[i+1];
}
}
console.log("le tab:",newtab);
}
// take input
var tableau = prompt('Enter an array:');
var tabbb = removeSmallest(tableau);
