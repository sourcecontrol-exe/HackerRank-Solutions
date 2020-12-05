function dayOfProgrammer(year){
    let years={
        jan:31,
        mar:31,
        apr:30,
        may:31,
        jun:30,
        jul:31,
        aug:31
    }
    let sum=0
    if(year<1918){
        if(year%4==0){
            years.feb=29
        }
        else{
            years.feb=28
        }

    }
    if(year>1918){
        if((year%4 ==0 && year%100!=0) || year%400==0 ){
            years.feb=29
        }
        else 
            years.feb = 28

    }
    if(year==1918){
        if((year%4 ==0 && year%100!=0) || year%400==0 ){
            years.feb=29-13
        }
        else 
            years.feb = 28-13
     }
    Object.values(years).map(ele=>{
        sum=sum+ele
    })
    let date=256-sum
    return (date.toString()+"."+"09"+"."+year.toString())
}
dayOfProgrammer(1918)