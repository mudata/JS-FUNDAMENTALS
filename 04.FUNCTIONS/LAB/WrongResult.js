function wrongResult(num1,num2,num3)
{
    var result="";
if(num1>=0&&num2>=0&&num3>=0)
{
    result="positive";
}
else{ 
    result="negative"
}
return result;
}
console.log(wrongResult(1,3,-4))

