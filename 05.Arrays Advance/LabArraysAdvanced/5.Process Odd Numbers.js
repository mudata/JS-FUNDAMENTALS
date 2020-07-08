function ProcessOddNumbers(arr){
    let newArr=[];
    let newArr1=[];
var oddPositions=function(arr)
{
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(i%2!==0){
        newArr.push(element);
    }
}
return newArr;
}
//oddPositions(arr);
//  var miltyPlyNumbers=function(newArr){
//      for (let i = 0; i < newArr.length; i++) {
//         const element = newArr[i]*2;
//         newArr1.push(element);
         
//      }
//      return newArr1;
//  }
// console.log(miltyPlyNumbers(newArr).reverse().join(" "));


console.log(oddPositions([1,2,3,4,5,6]));

}
ProcessOddNumbers([10, 15, 20, 25])