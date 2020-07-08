function orders(order,count)
{
    var price=0;
if(order==="coffee"){price=1.5;}
else if(order==="water"){price=1.0;}
else if(order==="coke"){price=1.4;}


return price*count;

}
console.log(orders("water",5))