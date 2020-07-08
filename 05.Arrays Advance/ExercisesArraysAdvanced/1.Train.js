function solve(array) {
    var wagons = array.shift().split(" ");
    let max =array.shift();
    while (array.length > 0) {
        let comand = array.shift().split(" ");
        if (comand.length==1) {
            for (let i = 0; i < wagons.length; i++) {
                comand=Number(comand);
                let element = Number(wagons[i]);
                if (element + comand <= max) {
                    wagons[i] = element + comand;
                    break;                
                }
            }
        }
        else {
            wagons.push(comand[1]);
        }


    }
    console.log(wagons.join(" "));
}

solve(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']);