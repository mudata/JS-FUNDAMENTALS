function gg(number)
{
var oddsum=0;
var evensum=0;
while (number>0) {
    
    var unshift=number%10;
if(unshift%2==0){evensum+=unshift;}
else{oddsum+=unshift;}

    number=parseInt(number/10);
    
}
    
 return `Odd sum = ${oddsum}, Even sum = ${evensum}`
}
console.log(gg(1000435))