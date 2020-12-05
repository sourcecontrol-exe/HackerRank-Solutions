function saveThePrisoner(n,m,s){
    let increment = m%n
     return((s+increment-1)%n)
}
let a = saveThePrisoner(19934,744554784,19821)
console.log(a)