function solve(arr) {
    let targetValue=arr[0];
   

function action1(currentValue,action)
{

switch (action) {
    case "cut":
        currentValue =currentValue >> 2;;
        cutCount++;
        break;
        case "lap":
            currentValue /= 1.25;
                lapCount++;
                break;
            case "grind":
                currentValue -= 20;
                grindCount++;
                break;
            case "etch":
                currentValue -= 2;
                etchCount++;
                break;
            case "xRay":
                currentValue += 1;
                xrayCount++;
                return currentValue;
}
return transporting(currentValue);
}

for (let i = 1; i < arr.length; i++) {
    let currentValue=arr[i];
    var cutCount = 0, lapCount = 0, grindCount = 0, etchCount = 0, xrayCount = 0;
    var used = false;
    console.log(`Processing chunk ${currentValue} microns`);
    while (currentValue!=targetValue) {
        
        while (currentValue>> 2>=targetValue-1) {
            currentValue=action1(currentValue,"cut")
            
        }
        while (currentValue/1.25>=targetValue-1) {
            currentValue=action1(currentValue,"lap")
            
        }
        while (currentValue-20>=targetValue-1) {
            currentValue=action1(currentValue,"grind")
            
        }
        while (currentValue-2>=targetValue-1) {
            currentValue=action1(currentValue,"etch")
            
        }
        if(currentValue+1==targetValue&&used==false)
        {
            used=true;
            currentValue = action1(currentValue,"xRay");
        }

    }
    if(cutCount > 0) {
        console.log(`Cut x${cutCount}`)
        console.log("Transporting and washing");
    }

    if(lapCount > 0) {
        console.log(`Lap x${lapCount}`)
        console.log("Transporting and washing");
    }

    if(grindCount > 0) {
        console.log(`Grind x${grindCount}`)
        console.log("Transporting and washing");
    }

    if(etchCount > 0) {
        console.log(`Etch x${etchCount}`)
        console.log("Transporting and washing");
    }

    if(used) {
        console.log(`X-ray x1`)
    }

    console.log(`Finished crystal ${targetValue} microns`)



}
function transporting(value)
{
return Math.floor(value);
}

}



solve([1375, 50000 ]);