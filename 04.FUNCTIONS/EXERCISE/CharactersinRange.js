function gg(startValue,endValue)
{
   startValue= startValue.charCodeAt(0);
   endValue= endValue.charCodeAt(0);
 // console.log(startValue);
   //console.log(endValue);
   var result="";
   if(startValue<endValue){
for (let i = startValue+1; i < endValue; i++) {
    result+=String.fromCharCode(i)+ " ";
    
}
   }
   else{for (let i = endValue+1; i <startValue; i++){
    result+=String.fromCharCode(i)+ " ";
    
}}
return result;
}
console.log(gg('C','#'));