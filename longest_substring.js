//Longest Substring Without Repeating Characters

var lengthOfLongestSubstring = function(s) {
  
    if(s.length<=1) 
        return s.length
    
    let p= 0
    var q =1
     let result = 1
     while( q < s.length ){
         var sub = s.slice(p,q)
         var i = sub.indexOf(s[q]);
         console.log(i)
            if( i!== -1){
             p = p + i + 1
             console.log(p)
         }       
         q++
         
         result = q - p > result ? q - p : result
    }
     return result
};

  let as = lengthOfLongestSubstring("absfd")
   console.log(as)