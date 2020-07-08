function gg(arr)
{
    const arr1=arr[0];
    const arr2=arr[1];
    const arr3=arr[2];

    let purvired=(arr1[0]+arr1[1]+arr1[2]);
    let vtorired=(arr2[0]+arr2[1]+arr2[2]);
    let tretired=(arr3[0]+arr3[1]+arr3[2]);
    console.log(typeof(purvired));
    console.log(typeof(vtorired));
    console.log(typeof(tretired));

    if(purvired==vtorired==tretired){
        console.log(true)
    }
    else{
       console.log(false)
        }

    console.log(arr1[0])
    console.log(arr1[1])
    console.log(arr1[2])
    console.log()
    console.log(arr2[0])
    console.log(arr2[1])
    console.log(arr2[2])
    console.log()
    console.log(arr3[0])
    console.log(arr3[1])
    console.log(arr3[2])
}
gg([[4, 5, 6],[6, 5, 4],[5, 5, 5]])