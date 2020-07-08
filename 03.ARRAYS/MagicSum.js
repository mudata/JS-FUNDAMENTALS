function gg(arr,number)
{
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        for (let j = i; j < arr.length; j++) {
            if(element!=arr[j]){
            if((element+arr[j])==number){
                console.log(`${element} ${arr[j]}`)
                }
            }
            
        }
        
    }
}
gg([14, 20, 60, 13, 7, 19, 8],
    27)