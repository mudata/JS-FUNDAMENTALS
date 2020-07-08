function even(arr)
{
    let sumeven=0;
    let sumodd=0;
for (let i = 0; i < arr.length; i++) {
    const element =Number(arr[i]);
    if(element%2==0){sumeven+=element;}
    else {sumodd+=element;}
}
console.log(sumeven-sumodd);
}
even([3,5,7,9])