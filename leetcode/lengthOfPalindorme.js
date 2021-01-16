function lengthOfPalindrome(string){
    for(let i =0 ; i< string.length ; i++){
        for(let j= i+1; j< string.length ; j++){
          let substring = string.slice(i,j)
          console.log(substring)  
        }
    }
}

lengthOfPalindrome("swetabh")