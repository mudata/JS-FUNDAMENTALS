function gg(arr){

var  newarr=[];

for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    let rigth=arr.slice(i+1);
    let ff =true;
    for (let j = 0; j < rigth.length; j++) {
        
        //console.log(arr[i])
        if(i===arr.length-1){newarr.push(arr[j]);break;}
        else if(element<=rigth[j]){
            ff=false;
            break
            
        }
        

    }
    if(ff){newarr.push(arr[i]);}
      
}
    
console.log(newarr.join(" "))
}
gg([41, 41, 34, 20])