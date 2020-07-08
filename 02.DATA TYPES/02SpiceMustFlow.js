function gg(starting_yield)
{
var days=0;
var leaving=0;
if(starting_yield>=100){
while(starting_yield>=100)
{
    days++;
    leaving+=starting_yield-26;
    starting_yield-=10;
    

}
    leaving-=26;
    console.log(days)
    console.log(leaving)
}
else{console.log(days)
    console.log(leaving)}
}
gg(450)