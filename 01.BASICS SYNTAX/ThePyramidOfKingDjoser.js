function gg(base,increment)
{
    base=parseFloat(base);
    increment=parseFloat(increment);
    var stone=0;
    let marble=0;
    let lapis_lazuli=0;
    let gold=0;
    let petired=0;
    for (let i = base; i > 0; i-=2) {
        petired++;
        var total=i*i;
        let ramka=0;
        
        if(petired%5===0){//vseki peti red LAPIS_lazuli
            ramka=(4*i-4);
        lapis_lazuli+=ramka;
        stone+=total-ramka;

        }
            else if(i<=2){//posleden red GOLD
            gold=total;
            
            }
        
        else{
            ramka=(4*i-4);
            marble+=ramka
            stone+=total-ramka;
            
        }   
    }
            console.log(`Stone required: ${Math.ceil(stone*increment)}`)
            console.log(`Marble required: ${Math.ceil(marble*increment)}`)
            console.log(`Lapis Lazuli required: ${Math.ceil(lapis_lazuli*increment)}`)
            console.log(`Gold required: ${Math.ceil(gold*increment)}`)
            console.log(`Final pyramid height: ${Math.floor(petired*increment)}`)
}
gg(11,0.75)