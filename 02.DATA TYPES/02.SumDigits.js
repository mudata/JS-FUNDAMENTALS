function gg(number)
{
    var array=[number].toString()
    //var splitarayy=array.toString().split("").map(Number)
    //.reduce(function(a,b){return a+b;},0)
    
    let sum=0;
    for (let i = 0; i < array.length; i++) {
        let element = Number(array[i]);

        sum+=element;
    }
    console.log(sum)
}
gg(245678)