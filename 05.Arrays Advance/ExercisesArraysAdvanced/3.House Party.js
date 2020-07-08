function solve(arr) {
    let newarr=[];
while(arr.length>0)
{
    let name=arr.shift().split(" ");
    let leng=name.length;
    if(leng==3){
        let bool=true;
        for (let i = 0; i < newarr.length; i++) {
            const element = newarr[i];
            if(name[0]===element){
                bool=false;
                break;
            }
        }
        if(bool){newarr.push(name[0]);}
        else{console.log(`${name[0]} is already in the list!`)}
    }
    else{
        let bool=true;
        for (let i = 0; i < newarr.length; i++) {
            const element = newarr[i];
            if(name[0]===element){
                bool=false;
                newarr.splice(i,1);
                break;
            }
        }
        if(bool){console.log(`${name[0]} is not in the list!`)}
    }
}

newarr.forEach(element => {
    console.log(element);
});


}

solve(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']);