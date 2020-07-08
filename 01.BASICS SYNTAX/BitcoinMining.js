function gg(array)
{
    let bitcoin=11949.16;
    let gold=67.51;
let count=0;
let day;
let money=0;
var bitcoinCount=0;

for (let i = 1; i <= array.length; i++) {
    
    let money1=array[i-1]
    if(i%3==0){money1-=money1*0.3}
    money+=money1*67.51;
   
    if(money>=bitcoin){
        if(day===undefined){
            day=i;
        }
        count++;
        bitcoinCount+=parseInt(money/bitcoin)
        money-=parseInt(money/bitcoin)*bitcoin;
    }
    
    
    
}


console.log(`Bought bitcoins: ${bitcoinCount}`);
if(day!==undefined){
console.log(`Day of the first purchased bitcoin: ${day}`);}
console.log( `Left money: ${money.toFixed(2)} lv.`);



}
gg([100,200,300])