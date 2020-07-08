function gg(arr)
{
    
    let last=Number( arr.pop());
    //console.log(last)
    //console.log(arr.length)
    let newarr=[];
    let total=0;
    for (let i = 0; i < arr.length; i+=last) {
      let el=arr[i];
      //console.log(el)
      total=newarr.push(el)
       // console.log(newarr)
    }
console.log(newarr.join(" "))


}
gg(['dsa', 'asd', 'test', 'test', '2'])