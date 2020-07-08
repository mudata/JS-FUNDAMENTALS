function solve(arr) {
    
    arr.sort((a,b)=>{return b-a});
   // console.log(arr)
    for (let i = 1; i <= arr.length; i++) {
        const element = arr[i];
        
       
        if(i%2==0){
            let lastitem=arr.pop();
           arr.splice(i-1,0,lastitem);
       }
       //console.log(arr)
        
    }
    console.log(arr.join(" "))
}

solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);