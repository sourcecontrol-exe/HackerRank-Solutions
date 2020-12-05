function prime(n){
    let arr = []
    let num = 2
    let prime = false
    while(arr.length<n.length){
        for(var i =2 ; i<Math.sqrt(num) ; i++){
            if(num%i==0 && i<num){
                break
            }
            else if(num%i==0){
                arr.push(num)
            }
        }
        num++
    }
    return arr
}
let arr=prime([2,5,4,8,7,9])

console.log(arr)