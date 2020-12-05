function mys(s){
 let len = s.length
 let firstHalf=''
 let sechalf =''
 if(len%2==0){
      firstHalf = s.substring(0,len/2)
      sechalf = s.substring(len/2,len).split('').reverse().join('')
 }
 else if(len%2!=0){
    firstHalf = s.substring(0,len/2)
    sechalf = s.substring(len/2+1,len).split('').reverse().join('')
 }
  let temp = 0
  for(var i =0; i<firstHalf.length ; i++){
      temp = temp + Math.abs(firstHalf.charCodeAt(i)-sechalf.charCodeAt(i))
  }
  return (temp)
}
let ans = mys("cba")