function gg(num,arr)
{
//arr=arr.slice(0,num);
//arr=arr.reverse();
//console.log(arr.join(" "))
let newarr=[];
for (let i = 0; i < num; i++) {
    const element = arr[i];
    newarr.push(element);
    
}
let output="";
for (let j = newarr.length-1; j >= 0; j--) {
    output+=newarr[j]+" ";
    
}
console.log(output)
}
gg(3, [10, 20, 30, 40, 50])
//43 66