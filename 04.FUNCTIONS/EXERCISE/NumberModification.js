function solve(number) {
    let sum=0;
    let arr=number.toString().split("");
    let count=0;
    for (let i = 0; i < arr.length; i++) {
    let el=Number(arr[i]);

    sum+=el;
    
        
    }
    let avaragesum=sum/arr.length;
    while (avaragesum<5) {
        arr.push(9);
       // console.log(arr[count])
       sum+=9
        avaragesum=sum/arr.length;
//console.log(sum)
        //console.log(avaragesum);
        //console.log(arr.length)

        count++;
    }
    console.log(arr.join(""))
}

solve(101);