class node{
    constructor(data){
        this.data = data,
        this.next = null
    }
}

function reverse(arr){
    let even = []
    let result = []
    arr.map(ele=>{
        if(ele%2==0){
           even.push(ele)
        }
        else {
            result.push(...even.reverse())
            result.push(ele)
            even = []
        }
    })
    if(even.length!==0){
        result.push(...even.reverse())
    } 
     let newNode = new node(result[0])
     let temp = newNode
     for( var i =1 ; i < result.length ; i++){
         temp.next =  new node(result[i])
         temp = temp.next
     }
     console.log(newNode, result)
}

 reverse([2,4,6,7,9,6,10])