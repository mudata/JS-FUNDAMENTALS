function chessBoard(n)
{
    let currentColour="black";
    let previousColour="";
console.log(`<div class="chessboard">`)
for (let i = 0; i < n; i++) {
    console.log("  <div>");
    for (let j = 0; j < n; j++) {
        if(currentColour=="black"){
        console.log(`    <span class="${currentColour}"></span>`)
        currentColour="white"
        }
        else{
            console.log(`    <span class="${currentColour}"></span>`)
            currentColour="black";
        }
       
        
    }
    if(n%2===0){
        if(currentColour=="black"){
        currentColour="white";
    }
    else{currentColour="black";}
    }
    
    console.log("  </div>")
}
console.log("</div>")
}
chessBoard(4)