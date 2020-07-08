function rotation(arr,numberOfRotations)
{
    const arr1=arr;
    for (let i = 0; i < numberOfRotations; i++) {
        arr1.push(arr1.shift());
        
        
    }
    console.log(arr1.join(" "))
}
rotation([51, 47, 32, 61, 21], 2)