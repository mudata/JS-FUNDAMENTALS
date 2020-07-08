function gg(arr)
{

let last=Number(arr.pop());
for (let i = 0; i < last; i++) {
    let lastElement = arr.pop();
    //console.log(lastElement)
    arr.unshift(lastElement);
    
}

console.log(arr.join(" "))



}
gg(['Banana', 'Orange', 'Coconut', 'Apple', '15'])