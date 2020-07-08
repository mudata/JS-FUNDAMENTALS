function gg(number)
{
    var bool;
    if(number===2){
        bool=true;
    }
    if(number>1){
    for (let i = 2; i < number; i++) {
        if(number%i!==0){
            bool=true;
        }
        else if(number===i*i){
            bool=false;
        }
        else{
            bool=false;
        }
        
    }
}
else{
    bool=false;
}
    console.log(bool)
}
gg(8)