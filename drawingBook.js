function book(n,p){
    let mid =0
    if(n%2==0){
        mid=n/2
    }
    else{
        mid=(n+1)/2
    }
    let temp=0
    if(p<mid){
        temp = Math.floor(p/2)
    }
    else(
        temp= Math.floor((n-p)/2)
    )
     console.log(temp)
}
 function page(n,p){
     let pages = Math.floor(p/2)
     let total = Math.floor(n/2)
      let a = pages
      let b = total - pages
      return( Math.min(a,b))
 }

 page(6,5)