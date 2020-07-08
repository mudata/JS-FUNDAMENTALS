function solve(arr) {
    
   
    let value=0;
   for (let i = 0; i < arr.length; i++) {
    let firstComand=arr[i]
    switch (firstComand) {
        case "soap":
            value+=10;
        break;
        case "water":
            value+=0.2*value;
        break;
        case "vacuum cleaner":
            value+=0.25*value;
        break;
        case "mud":
            value-=0.1*value;
        break;
    }

    }
    console.log(`The car is ${(value).toFixed(2)}% clean.`)
}

solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);