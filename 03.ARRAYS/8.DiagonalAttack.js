function gg(arr)
{
    arr=arr.flat();
let splitarr=[];
//console.log(arr.split(" "))
for (let i = 0; i < arr.length; i++) {
    let el = arr[i].split(" ")
    splitarr[i]=el;
    
}
console.log(splitarr)
// for (let i = 0; i < arr.length; i++) {
//     let  element = Number( arr[i] );
//     splitarr[i]=element;
    
// }
// //console.log(splitarr)
// splitarr.forEach(elements => {
//    console.log(elements.split(" "));
// });
}
gg(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1'])