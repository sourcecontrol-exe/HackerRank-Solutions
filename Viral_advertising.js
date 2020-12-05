function viral(n){
    let shared = 5
     let cumilative = 0
     let liked =0
    for (let i = 0; i<n ; i++){
        liked  = Math.floor(shared/2)
        cumilative = cumilative + liked
        shared = Math.floor(shared/2)*3
    }
    return(cumilative)
}
viral(3)