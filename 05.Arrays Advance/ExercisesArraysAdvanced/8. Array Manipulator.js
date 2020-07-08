function solve(array, array2) {

    let comand = array2.shift().split(" ");
    let newarr=[];
    let arr=[];
    let sum1=0;
    while (array.length >= 0 && comand[0] !== "print") {
        switch (comand.shift()) {
            case "add":
                Add();
                break;
            case "addMany":
                AddMany();
                break;
            case "contains":
                let element = comand.shift();
                let index = 0;
                let bool = true;
                for (let i = 0; i < array.length; i++) {
                    const element1 = array[i];
                    if (element == element1) {
                        index = i;
                        break;
                    }
                    else { bool = false; }

                }
                if (bool) { console.log(`${index}`); }
                else { console.log("-1"); }
                comand = array2.shift().split(" ");
                break;
            case "remove":
                Remove();
                break;
            case "shift":
                shift();
                break;
            case "sumPairs":
                sumPairs();
                break;
            case "print":
                break;

            default:
                break;

        }


    }

    if (comand[0] == "print") { 
        array.join(" ");
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            arr.push(element);

            
        }
        console.log(`[ ${arr.join(", ")} ]`);
        }



    function sumPairs() {
        for (let index = 0; index < array.length; index += 2) {
            let firstitem = array[index];
            let seconditem = array[index];
            sum1 += firstitem + seconditem;
            newarr.push(sum1);
            sum1 = 0;
        }
        
        comand = array2.shift().split(" ");
        return newarray;
    }

    function shift() {
        let positions = comand.shift();
        for (let i = 0; i <= array.length; i++) {
            let first = array.shift();
            array.push(first);
        }
        
        comand = array2.shift().split(" ");
        return array;
    }

    function Remove() {
        let index = comand.shift();
        array.splice(index,1);
        
        comand = array2.shift().split(" ");
        return array;
    }

    function AddMany() {
        let index = Number(comand.shift());
        let elements="";
        for (let i = 0; i < comand.length; i++) {
            let element =Number(comand[i]);
            array.splice(index, 0, element);
            index++;
           
        }
        
        comand = array2.shift().split(" ");
        return array;
    }

    function Add() {
        let index = Number(comand.shift());
        let element = Number(comand.shift());
        array.splice(index, 0, element);
        comand = array2.shift().split(" ");
        
        return array;
    }


}
solve([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']);