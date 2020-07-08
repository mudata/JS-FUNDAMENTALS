function gg(array)
{
    
for (let i = 0; i < array.length; i++) {
    
    var proterka=true;
    var num=array[i];
    num=num.toString().split("");

    for (let j = 0; j < num.length; j++) {
       
        if(num.length==1){
            break;
            }
        var purvacifra=num.shift();
        var poslednacifra=num.pop();
        if(purvacifra!==poslednacifra){
            proterka=false;
            break;
        }
        num.pop();
        num.shift();
        
    }
    if(proterka===true){
        console.log("true");
        }
    else{
        console.log("false");
        }
    
}

}
gg([32,2,232,1010])