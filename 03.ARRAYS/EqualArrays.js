function gg(arr1,arr2)
{
    let isequal=true;
    let sum=0;
    let index=0;
for (let i = 0; i < arr1.length; i++) {
    
    sum+=Number(arr1[i]);
    if(Number(arr1[i])===Number(arr2[i])){isequal=true;}
    else{isequal=false;index=i;break;}
    
    
}
if(isequal){console.log(`Arrays are identical. Sum: ${sum}`)}
else{console.log(`Arrays are not identical. Found difference at ${index} index.`)}
}
gg(['1'], ['10'])