function gg(arr)
{
var sumTotal=0;
var sumRigth=0;
var sumLeft=0;
//console.log(arr.length)
if(arr.length==1){console.log(0)}
else{
    for (let i = 0; i < arr.length; i++) {
        sumTotal+=arr[i]
    }
    for (let i = 1; i <= arr.length; i++) {

        sumLeft+=arr[i-1];
        //console.log(sumLeft);
        sumRigth=sumTotal-sumLeft-arr[i];
        //console.log(sumRigth);
        if(sumRigth===sumLeft){
            console.log(i);
            break;
        }
        
        
    }
    if(sumLeft!==sumRigth){
        console.log("no")
    }
}

}
gg([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])