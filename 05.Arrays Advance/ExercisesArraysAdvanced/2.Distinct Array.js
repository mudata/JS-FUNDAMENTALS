function solve(arr) {
 
    // let newarr=[];
    
    // for (let i = 0; i < arr.length; i++) {
    //     let element = arr[i];
    //     var bool=true;
    //     if(i==0){newarr.push(element);}
    //     for (let j = 0; j <arr.length; j++) {
    //         let element2 =arr[j];
            
    //         if(Number(element)===Number(element2)){bool=false;break;}
    //         else{bool=true;}
            
    //     }
    //     if(bool){newarr.push(element);}
        
    // }
    arr = [...new Set(arr)];
console.log(arr.join(" "));
   // console.log(newarr);


}
solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);