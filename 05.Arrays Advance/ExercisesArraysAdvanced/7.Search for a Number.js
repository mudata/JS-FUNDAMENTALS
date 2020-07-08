function solve(array,array2) {
    let count=0;
let takeEL=array2[0];
let deleteEL=array2[1];
let searchEL=array2[2];
let arrayToSearch=array.slice(0,takeEL);
//console.log(arrayToSearch);
let deletedArray=arrayToSearch.slice(deleteEL,arrayToSearch.length);

for (let i = 0; i < deletedArray.length; i++) {
    const element = array[i];
    if(searchEL==element){count++;}
}

console.log(`Number ${searchEL} occurs ${count} times.`)
}
solve([5, 2, 3, 4, 1, 6],
    [5, 2, 3]);