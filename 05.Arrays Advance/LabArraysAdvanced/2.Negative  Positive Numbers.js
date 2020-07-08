function NegativePositiveNumbers(arr){
let array=[];
var checkNegative=function(arr){
    for (let i = 0; i < arr.length; i++) {
        let number=arr[i];
        if(number<0){array.unshift(number);}
        
    }
    return array;
}

var checkPosivite=function(arr){
    for (let i = 0; i < arr.length; i++) {
        let number=arr[i];
        if(number>=0){array.push(number);}

        
    }
    return array;
}

checkNegative(arr);
checkPosivite(arr);
//array.reverse();
for (let i = 0; i < array.length; i++) {
   console.log(array[i]);
    
}

}
NegativePositiveNumbers([7, -2, 8, 9])