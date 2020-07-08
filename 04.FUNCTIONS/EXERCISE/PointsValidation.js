function solve(array) {
    let x1=array[0];
    let y1=array[1];
    let x2=array[2];
    let y2=array[3];
    let c1=Math.sqrt(Math.pow(x1,2)+Math.pow(y1,2));
    let c2=Math.sqrt(Math.pow(x2,2)+Math.pow(y2,2));
    let c3=Math.sqrt(Math.pow(c1,2)+Math.pow(c2,2));

        if(Number.isInteger(c1)){console.log(`{${x1}, ${y1}} to {0, 0} is valid`)}
        else{console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)};
        if(Number.isInteger(c2)){console.log(`{${x2}, ${y2}} to {0, 0} is valid`)}
        else{console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)}
        if(x1==x2||y1==y2||Number.isInteger(c3)){console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)}
        else{console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)}
        
    

}
solve([2, 1, 1, 1]);