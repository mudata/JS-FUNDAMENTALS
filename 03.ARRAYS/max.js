function max(arr)
{

    let longestsequance=[];
    let leftMostIndex=0;
    for (let i = 0; i < arr.length; i++) {
        let currentEL=arr[i]
        let currentSequance=[currentEL]
        for (let j = i; j < arr.length; j++) {
           if(currentEL==arr[j+1]){
               currentSequance.push(currentEL)
           }
           else{
               break;
           }
            
        }
        if(currentSequance.length>longestsequance.length){
            longestsequance=[];
            for (let i = 0; i < currentSequance.length; i++) {
                longestsequance.push(currentSequance[i])
                
            }
        }
        
    }
    console.log(longestsequance.join(" "))

}
max([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])