function gg(year,month,day)
{
    let setDate=new Date(year,month-1,day)
    let tomorowDate=new Date(year,month-1,setDate.getDate()+1);
    console.log(`${tomorowDate.getFullYear()}-${tomorowDate.getMonth()+1}-${tomorowDate.getDate()}`)
      
}
gg(2016,9,30)