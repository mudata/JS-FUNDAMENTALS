function FirstandLastKNumbers(arr){

let k=arr[0];
arr=arr.slice(1,arr.length);
//console.log(arr)

var firstnums=(arr)=>arr.slice(0,k);
var secondnum=function(arr){
    let arr1=[]
    for (let i = 0; i <arr.length; i++) {
        
        if(i+k>=arr.length){
            let num=arr[i];
            arr1.push(num);
        }
        
    }
    return arr1;
}

console.log(firstnums(arr).join(" "));
console.log(secondnum(arr).join(" "));

}
FirstandLastKNumbers([2, 
    7, 8, 9])