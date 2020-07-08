function gg(array)
{


// for (let i = 0; i < arr.length; i++) {
//     let number=arr[i];
//     let is=true;
//     console.log(number)
//     for (let j = i; j < arr.length; j++) {
//         let secondNum=arr[j]
//         console.log(secondNum);
        
//     }
    
// }
let max = Number.MIN_SAFE_INTEGER;
let arr = array.filter(function (num){
    if (num >= max) {
        max = num;
        return true;
    } else {
        return false;
    }
});

console.log(arr.join(" "));
}
gg([ 1, 3, 8, 4, 10, 12, 3, 2, 24])