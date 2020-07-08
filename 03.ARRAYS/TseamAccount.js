function gg(arr)
{
    let newarr=[arr[0]];
    newarr=newarr.toString().split(" ");
   
for (let i = 1; i < 10000; i++) {
    let comand=arr[i].split(" ");
    
    //console.log(comand[1]);
    if(comand[0]=="Play!"){
        break;
    }
    else if(comand[0]=="Install"){
    newarr.push(comand[1]);//console.log(newarr)
    
    
    }
    else if(comand[0]=="Uninstall"){
    for (let i = 0; i < newarr.length; i++) {
           
             if(comand[1]===newarr[i]){console.log("ima q");newarr[i]="";break;//console.log(newarr)
            }
            
         }
            
    }
    else if(comand[0]=="Update"){
        newarr.push(comand[1]);
        for (let i = 0; i < newarr.length; i++) {
           
            if(comand[1]===newarr[i]){console.log("update");newarr[i]="";//console.log(newarr);
            break;}
           
        }
            
        
    }
    else if(comand[0]=="Expansion"){
        var newgame=comand[1].split("-");//
        //console.log(newgame[0])
        console.log(comand[1])
for (let i = 0; i < newarr.length; i++) {
           //console.log(newarr[i])
   if(newgame[0]==newarr[i]){
        console.log("expansion");
        newarr.push(newarr[i+1]=comand[1]);
       console.log(newarr);
        break;
            }
   
        }
    }


}
console.log(newarr.join(" "))
}
gg(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!'])