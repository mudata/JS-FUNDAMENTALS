function gg(number)
{
var percets=number/10;
var a="%";
var c=".";
var b=10-percets;
//console.log("["+a.repeat(percets)+c.repeat(b)+"]")
if(percets==1){
    console.log(`${number}% [%.........]`);
    console.log("Still loading...");
}
else if(percets==2)
{console.log(`${number}% [%%........]`);
console.log("Still loading...");}
else if(percets==3)
{console.log(`${number}% [%%%.......]`);
console.log("Still loading...");}
else if(percets==4)
{console.log(`${number}% [%%%%......]`);
console.log("Still loading...");}
else if(percets==5)
{console.log(`${number}% [%%%%%.....]`);
console.log("Still loading...");}
else if(percets==6)
{console.log(`${number}% [%%%%%%....]`);
console.log("Still loading...");}
else if(percets==7)
{console.log(`${number}% [%%%%%%%...]`);
console.log("Still loading...");}
else if(percets==8)
{console.log(`${number}% [%%%%%%%%..]`);
console.log("Still loading...");}
else if(percets==9)
{console.log(`${number}% [%%%%%%%%%.]`);
console.log("Still loading...");}
else if(percets==2)
{console.log(`${number}% [%%%%%%%%%%]`);
console.log("Still loading...");}

}
gg(50)