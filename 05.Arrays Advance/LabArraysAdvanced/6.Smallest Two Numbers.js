function SmallestTwoNumbers(arr){
let sort=arr.sort((a,b)=>{
    return a-b;
});

console.log(arr.slice(0,2).join(" "))
}
SmallestTwoNumbers([30, 15, 50, 5]);