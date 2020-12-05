function reduced(str){
 let arr = [...str]
for(var i=0;i<arr.length; i++){
  if(arr[i]==arr[i+1]){
    arr.splice(i,2)
    i=-1
  }
}
let ans = arr.length == 0 ? "Empty String" : arr.join('')
return(ans)
}
reduced("baab")



// recString= rec.map(ele=>{
//   return ele
// }).join('')