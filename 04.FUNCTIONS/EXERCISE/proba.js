function gg(number1,number2)
{
var factorial1=function(number1)
{
var result=1;
for (let i = number1; i >0; i--) {
    result*=i
    
}
return result;
};


var factorial2=function(number2)
{
var result2=1;
for (let i = number2; i >0; i--) {
    result2*=i
    
}
return result2;
};

return factorial1(number1)/factorial2(number2);

}
console.log(gg(5,2));