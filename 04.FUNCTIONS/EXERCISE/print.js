// var sum=(a,b)=>a+b;
// var multyply=(a,b)=>a*b;

// function gg(c,d)
// {
//     let result=0;
// if(c>d){
// result=sum(c,d);
// }
// else{
//     result=multyply(c,d);
// }
// console.log(result)
// }
// gg(5,6)
// console.log(sum(3,4))

function solve(num) {
    const matrix = new Array(6).fill(0).map(() => new Array(4).fill(0));
    for (let index = 0; index < matrix.length; index++) {
        for (let j = index; j < matrix.length; j++) {
            if (matrix[index][j]===0) {matrix[index][j]===1;
                
            }
            
        }
        
    }
    console.log(matrix)
}

solve(10);