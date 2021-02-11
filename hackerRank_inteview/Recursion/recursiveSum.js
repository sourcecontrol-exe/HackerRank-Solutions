function superDigit(n) {
  if(n.length== 1){
      return n
  }
  else{
      let sum =0;
      for(let i = 0; i< n.length ;i++){
        sum +=parseInt(n[i]);
      }
      n = sum.toString;
      superDigit(n);
  }
}
console.log(superDigit("148148148"));