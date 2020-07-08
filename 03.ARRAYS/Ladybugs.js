function gg(arr)
{
 var size=arr[0];
 var indexes=arr[1].split(" ");
 let newarr=[]

 for (let i = 0; i < indexes.length; i++) {//pulnime purvonachalno noviq masiv
     indexes[i]=1;
     newarr.push(indexes[i]);
     
 }
 for (let index = 2; index <= 3; index++) {
     const element = arr[index];
     var value=element.split(" ")
     let ladybugindex=Number( value[0] );
     let direction=value[1];
     let flylength=Number( value[2] );
     if(direction=="left"){
        if(newarr[ladybugindex]==1){
            console.log("ima na tova mqsto1")
        }
     }
     else if(direction=="right"){
        if(newarr[ladybugindex]==1){
            console.log("ima na tova mqsto2")
            ladybugindex+=1;
            
                    }
                    else{newarr[ladybugindex]==1;}
     }
     
 }
console.log(newarr)
}
gg([ 3, '0 1',
'0 right 1',
'2 right 1' ])
//.slice za otrqzvane do size na array