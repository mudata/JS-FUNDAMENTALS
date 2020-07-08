function gg(arr)
{
    let input= arr.shift();
    let string1=input.split('|');
//string11=string1.toString();
    let health=100;
    let coins=0;
    
//console.log(string1)
    //console.log(string1)
    let room=0;

    for (let i = 0; i <string1.length; i++) {
            room++;
           let string2=string1[i].split(" ");
           // console.log(string2)
            let firstValue=string2[0];
            let secondValue=Number(string2[1]);
            //console.log(firstValue);
            //console.log(secondValue)
            if(firstValue==="potion"){
               if(health+secondValue>100){
                  secondValue=100-health;
                   console.log(`You healed for ${secondValue} hp.`)}
                if(health+secondValue<100){
                    console.log(`You healed for ${secondValue} hp.`);
                }health=health+secondValue;
                    console.log(`Current health: ${health} hp.`)
                    
        }
        else if(firstValue==="chest"){
            console.log(`You found ${secondValue} coins.`)
            coins+=secondValue;
            
        }
        else{
            health-=secondValue;
            if(health>0){console.log(`You slayed ${firstValue}.`)}
            else if(health<=0){console.log(`You died! Killed by ${firstValue}.`);
                    console.log(`Best room: ${room}`);break;}
        }
    }
    if(room===string1.length){
    console.log(`You've made it!`)
    console.log(`Coins: ${coins}`)
    console.log(`Health: ${health}`)
    }

}
gg(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])