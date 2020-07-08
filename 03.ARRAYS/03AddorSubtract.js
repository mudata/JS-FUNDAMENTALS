function gg(Numbers)
{
let sum1=0;
let sum2=0;
for (let i = 0; i < Numbers.length; i++) {
    sum1+=Numbers[i]
    //console.log(Number(Numbers[i]))
    //console.log(i)
    if(Number(Numbers[i])%2==0){
        Numbers[i]=Numbers[i]+i;
        sum2+=Numbers[i]
    }
    else{
        Numbers[i]=Numbers[i]-i;
        sum2+=Numbers[i]
    }
    
    //console.log(Numbers)
    
}
console.log(Numbers)
console.log(sum1)
console.log(sum2)

}
gg([-5, 11, 3, 0, 2])