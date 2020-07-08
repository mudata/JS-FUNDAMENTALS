function gg(string)
{
   // console.log(string.length)
   var vsichko=true;
    if(string.length<6||string.length>10){
        vsichko=false;
        console.log("Password must be between 6 and 10 characters")
    }


    
    var proverka=false;
var letters = /^[0-9a-zA-Z]+$/;
if(string.match(letters))
{
proverka=true;
}
if(proverka){}
else{vsichko=false;
    console.log("Password must consist only of letters and digits")}



var atLeastTwoDigits = new RegExp("[0-9].*[0-9]");
if(string.match(atLeastTwoDigits)){
    //console.log("ima dve cifri")
}
else{vsichko=false;
    console.log("Password must have at least 2 digits")}
if(vsichko)
{console.log("Password is valid")}
}
gg('Pa$s$s')