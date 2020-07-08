function LeapYear(input)
{
    var User=input.shift()
    var pass=User.split('').reverse().join('');
    var broiopiti=0;
    for (let i = 0; i <input.length; i++) {
        let newpass=input[i];
        if(newpass===pass){
            console.log(`User ${User} logged in.`)
            break;
        }
            else{
                broiopiti++;
        
            if(broiopiti>3)
            {
            console.log(`User ${User} blocked!`)
            break;
            }
        }
        console.log(`Incorrect password. Try again.`)
    }

}
LeapYear(["sunny",
    "rainy",
    "cloudy",
    "sunny",
    "not sunny"])