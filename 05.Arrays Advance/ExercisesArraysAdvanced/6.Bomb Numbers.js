function solve(arr1,arr2) {
   let array=[];
let sum=0;
let specialNumber=Number(arr2[0]);
let specialNumberPower=Number(arr2[1]);

for (let i = 1; i <= arr1.length; i++) {
    const element = arr1[i-1];
    if(specialNumber==element){
        let index=specialNumber.indexOf();
       // console.log(index)
        arr1.splice(specialNumber-specialNumberPower-1,specialNumber+specialNumberPower-1);
        console.log(arr1);

        for (let k = 0; k < arr1.length; k++) {
             const element1 = arr1[k];
             sum+=element1;
            
        }
        
    }
    
}
console.log(sum)

}

solve([1, 7, 7, 1, 2, 3],
    [7, 1]);