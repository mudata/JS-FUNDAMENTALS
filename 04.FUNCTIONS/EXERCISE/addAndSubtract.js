function sum(a,b,c)
{
    var result=a+b;

    function subtract()
    {
    return result-c;
    }

    return subtract();
}

console.log(sum(23,6,10))
