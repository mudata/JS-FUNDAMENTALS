function gg(arr){

let newarr=[];
var broqch=0;
for (let i = 1; i < arr.length +1; i++) {
    let el=arr[i-1];
    //console.log(arr[3])
    broqch++;
    //console.log(el)
    if(el=="add"){
        newarr.push(i)
    }
    else if(el=="remove"){
        newarr.pop();
    }
    //console.log(i)
}
if(newarr[0]>=0){
console.log(newarr.join(" "))}
else{console.log("Empty")}


}gg(['remove', 'remove', 'remove'])