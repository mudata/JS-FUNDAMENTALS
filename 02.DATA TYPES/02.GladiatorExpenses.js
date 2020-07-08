function gg(lost_fight_count,helmet_price,sword_price,shield_price,armour_price)
{
var expenses=0;
var count=0
var shield_break=0;
for (let i = 1; i <= lost_fight_count; i++) {
    count++;
    //console.log(expenses)
    if(count%2==0){//vseki vtori den
        expenses+=helmet_price;
    }
    if(count%3==0){//vseki treti den
        expenses+=sword_price;
    }
    if(count%2==0&&count%3==0){
        expenses+=shield_price;
        shield_break++;
    }
    if(shield_break==2){
        expenses+=armour_price;
        shield_break=0;
    }
    
}


console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
}
gg(7,
    2,
    3,
    4,
    5)