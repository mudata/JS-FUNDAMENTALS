function print(num) {
const l="ATCGTTAGGG";
const arr=l.split("");
//console.log(arr[0])
var count=0;

    for (let i = 0; i < num; i++) {
        let firstitem=arr.shift();
        arr.push(firstitem);
        let seconditem=arr.shift();
        arr.push(seconditem);
       // console.log(arr)
        if(count===0){
            
            console.log(`**${firstitem}${seconditem}**`);
        }
        else if(count===1){
            console.log(`*${firstitem}--${seconditem}*`);
        }
        else if(count===2){
            console.log(`${firstitem}----${seconditem}`);
        }
        else if(count===3){
            console.log(`*${firstitem}--${seconditem}*`);
        }  
        count++;
        if(count===4){count=0;}
    }

 }
print(8)