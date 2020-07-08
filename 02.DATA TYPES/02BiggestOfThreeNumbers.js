function gg(a,b,c)
{
const array1=[a,b,c];
let safe=Number.MIN_SAFE_INTEGER;
let biggest=0;
    for (let i = 0; i < 3; i++) {
        var value=Number(array1[i]);
        console.log(value)
        if(value>=safe){
            biggest=value;
            safe=value;
            
        }

        
    }
console.log(biggest)

}
gg(1300000,
    555,
    99999)