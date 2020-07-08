function gg(binaryNumber)
{
  let number=binaryNumber;
    let sum=0;
    //console.log(number.length)
        for (let i = 0; i <8; i++) {
            number=Number(number)
            let lastDigit=Number(number%10);
            if(lastDigit==1){sum+=lastDigit*(Math.pow(2,i))}
           //console.log(typeof lastDigit)
            number=Math.trunc(number/10)
        }
        console.log(sum)
}
gg("00001001")