function LastKNumbersSequence(n,k){
    let previousSum=0;
    let arr=[];
    let currentarray=[]

    let currentNum=1;
    let bool=true;
while(bool=true){

    if(arr.length==n){
        bool=false;
        break;
    }
    if(arr.length==0){
    for (let i = 1; i <= k; i++) {
        if(arr.length==0){arr.push(currentNum);}
        else{
            arr.push(currentNum);
            currentNum++;
            
        }
        
       
    }
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        previousSum+=element;
                
        }
   // console.log(currentNum)
   // console.log(previousSum)
}


   else{ 
        currentarray=arr.slice(arr.length-k)
       // console.log(currentNum)
        //console.log(previousSum);
        
        if(currentNum===previousSum){
           
            arr.push(currentNum)
            currentarray.shift();
            currentarray.push(currentNum)
            previousSum=0;
            for (let i = 0; i < currentarray.length; i++) {
                const element = currentarray[i];
                previousSum+=element;
                        
                }
        }
        currentNum+=1;
        //console.log(arr.length)
    }
    //console.log(arr.length)
        
        
   }
    console.log(arr.join(" "))
}
LastKNumbersSequence(8,2)
//1,2,3,4,5,6
//1 1 2 4 7 13