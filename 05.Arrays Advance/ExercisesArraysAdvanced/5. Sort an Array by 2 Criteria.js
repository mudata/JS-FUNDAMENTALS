function solve(arr) {
    arr.sort((a,b)=>{return a.length - b.length});

arr.forEach(element => {
    console.log(element)
});
    

}

solve(["Isacc", "Theodor", "Jack", "Harrison", "George"]);