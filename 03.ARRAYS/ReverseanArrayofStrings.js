function swap(array)
{
for (let i = 0; i < array.length/2; i++) {
    swapElements(array,i,array.length-1-i);
    
}
console.log(array.join(" "));

function swapElements(arr,i,j){
let g=arr[i];
arr[i]=arr[j]
arr[j]=g;

//console.log(arr[j])
//console.log(arr[i])
}

}
swap(['a', 'b', 'c', 'd', 'e'])