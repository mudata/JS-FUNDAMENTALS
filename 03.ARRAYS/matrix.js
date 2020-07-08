function spiralMatrix(rows,cows)
{
    var total=rows*cows;
    var result=[];
    for (let i = 0; i < rows; i++) {
        var arr=[]
        for (let j = 0; j < cows; j++) {
            arr.push(0);
        }
        result.push(arr);
    }
    var x=0;//redove
    var y=0;//coloni
    var step = 0;
for (let i = 0; i < total; i++) {
    while(y+step<rows){
        i++;
        result[x][y]=i;
        y++;
        console.log(x)
        console.log(y)


    }
        y--;
        x++;
 
        while(x+step<rows){//posledna kolona
            i++;
            result[x][y]=i;
            x++;
            //console.log(result)
        }
        x--;
        y--;
 



   
    
}

    result.forEach(redove => {
        console.log(redove.join(" "));
    });
}
spiralMatrix(5,5);