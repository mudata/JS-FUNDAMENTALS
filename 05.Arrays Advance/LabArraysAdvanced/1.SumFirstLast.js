function sumLastAndFirst(arr)
{
    var firstItem=arr=>{return Number(arr.shift());};
    var seconItem=(arr)=>{return Number(arr.pop());};
    console.log(firstItem(arr)+seconItem(arr));
    

}
sumLastAndFirst(['20', '30', '40']);

