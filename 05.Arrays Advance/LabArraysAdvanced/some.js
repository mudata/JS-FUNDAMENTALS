function solve(arr) {
    
    console.log(arr);
    arr.forEach(element => {
        arr.push(1);
    });
    console.log(arr)
}

solve([1,2,3]);