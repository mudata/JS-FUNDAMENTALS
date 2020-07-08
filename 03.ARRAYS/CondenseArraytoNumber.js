function gg(arr)
{
    let numbers=arr;
    let condensed=[];
    let sum=0;
    while(numbers.length>1){
        for (let i = 0; i < numbers.length-1; i++) {
            condensed.push(numbers[i]+numbers[i+1]);
                
            }
           // console.log(condensed);
            //console.log(numbers)
            numbers=condensed;
            condensed=[];
            
    }

   
   
      console.log(numbers.join(" ")) 
    
}
gg([5,0,4,1,2])