//  function add(num1, num2){
//     let sum= ''
//     let str1=num1.toString()
//     let str2= num2.toString()
//     let str1Length=num1.toString().length
//     let str2Length= num2.toString().length
    
//     if(str2Length>str1Length){
//         let temp = str2;
//         str2=str1;
//         str1=temp
//     }

//     let carry = 0
//     let a
//     let b
//     let digitSum
    
//     for(var i=0;i<str1Length;i++){
//         a=parseInt(str1.charAt(str1Length-1 - i))
//         b=parseInt(str2.charAt(str2Length -1 -i))
//         b = (b) ? b : 0
//         temp = (carry + a + b).toString();
//         digitSum = temp.charAt(temp.length - 1);
//         carry = parseInt(temp.substr(0,temp.length-1))
//         carry = (carry) ? carry : 0

//         sum = (i === str1.length - 1) ? temp + sum : digitSum + sum
//     }

//     return (sum)
//  }

// function multiply(num){
//     let fact =1;
//     for ( let i = 2 ; i <= num ; i++){
//         if(Number.isSafeInteger(fact * i)){
//             fact = fact * i
//         }
//         else{ 
//             let factxi = 0
//             for (let j = 0 ; j < i ;j++){
//                 factxi= add(factxi,fact)
//             }
//             fact = factxi
//         }
//     }
//     console.log(fact)
// }

//  multiply(25)

 function add (num1,num2){
     let len1=num1.length
     let len2= num2.length
     
     if(len2>len1)
     {
         let temp = num2
         num2 = num1
         num1 = temp
     }
     let check = 0
     let a, b
     let sum =''
     let digitSum
     for(var i =0; i<len1; i++){
     a = parseInt(num1.charAt[len1-1 - i])
     b = parseInt(num2.charAt[len2-1  -i])
     b = (b) ? b: 0
     temp = (check+a+b).toString()
     digitSum= temp.charAt(temp.length - 1)
     check = parseInt(temp.substr(0,temp.length-1))
     check = (check) ? check : 0
    
     sum = (i===len1-1) ? temp +sum : digitSum + sum
     }
     return sum
 }



let f = add("23","45")
console.log(f)