function gg(radius,height)

{
let volume=0;
let area=0;
let V = (1/3)*Math.PI*Math.pow(radius,2)*height;

let A =Math.PI*radius*(radius + Math.sqrt(Math.pow(radius,2) + Math.pow(height,2)));



    console.log(`volume = ${V.toFixed(4)}`)
    console.log(`area = ${A.toFixed(4)}`)
}
gg(3,5)