function gg(arr)
{
var first=Number(arr.shift());
//console.log(first);
let second=Number(arr.pop());
//console.log(second)
console.log(first+second)
}
gg(['10', '17', '22', '33'])