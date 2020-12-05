function bill(b,k,bill){
    let sum = 0
    let sum2= 0
    bill.forEach((element,i) => {
     if(i!=k){
         sum=sum+element
     } 
     sum2=sum2+element       
    })
      
    let charge = b - sum
    if( charge == 0){
        console.log("Bon Appettit")
    }
    else{
        console.log((sum2-sum)/2)
    }

}

 bill(4,1,[3,10,2,9])
