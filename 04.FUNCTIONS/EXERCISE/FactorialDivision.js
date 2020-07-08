function gg(a,b)
{
    var factorial1=1;
    var factorial2=1;
    for (let i = a; i >0; i--) {
        factorial1*=i;
        
    }
    for (let i = b; i >0; i--) {
        factorial2*=i;
        
    }
    console.log((factorial1/factorial2).toFixed(2))

}gg(5,2)

