function solve(arr) {

    let inventory = arr.shift().split(" ");
    let name="";
    while (arr.length > 0) {
        let comand = arr.shift().split(" ");
        //console.log(comand[1]);
        switch (comand[0]) {
            case "Buy":
                name=comand[1];
                //console.log(name);
                let bool=true;
                for (let i = 0; i < inventory.length; i++) {
                    const element = inventory[i];
                    if(name!==element){bool=true;}
                    else{bool=false;break;}
                    
                }
                if(bool){inventory.push(name);}
            break;
            case "Trash":
                name=comand[1];
                //console.log(name);
                for (let i = 0; i < inventory.length; i++) {
                    const element = inventory[i];
                    if(name==element){
                        inventory.splice(i,1);
                        break;
                    }
                }
            break;
            case "Repair":
                name=comand[1];
                for (let i = 0; i < inventory.length; i++) {
                    const element = inventory[i];
                    if(name==element){
                        inventory.splice(i,1);
                        inventory.push(name);
                        break;
                    }
                }
            break;
            case "Upgrade":
                name=comand[1];
                name=name.split("-");
                //console.log(name[0]);
                let newname=name[0]+":"+name[1];
                //console.log(newname)
                for (let i = 0; i < inventory.length; i++) {
                    const element = inventory[i];
                    
                    if(name[0]==element){
                        inventory.splice(i+1,0,newname);
                        break;
                    }
                }
            break;
            default:
                comand=arr.shift().split(" ");
                break;
        }
        
        
    }
    console.log(inventory.join(" "));
    
    
}

solve(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']);