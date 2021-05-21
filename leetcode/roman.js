

var romanToInt = function(s){
    let set ={
    
        'I':1,
        'II':2,
        "III":3,
        "IV":4,
        "V":5,
        "VI":6,
        "VII":7,
        "VIII":8,
        "IX":9,
        "X":10,
        "XL":40,
        "L":50, 
        "XC":90,
        "C":100,
        "CD":400,
        'D': 500,
        "CM":900,
        'M' :1000
    }
  let symbols = Object.keys(set)
  symbols= symbols.reverse();
    
  let head=0;
  let tail = s.length;
  let temp = s.length-1;
  let result = []
  while(head<tail){
    let v = s.slice(head,temp+1);
    console.log(v)
    if(v in set){
        result.push(set[v].toString())
        head = temp+1;
        temp= s.length-1;
    }
    else{
        temp--;
    }
  }

  return result;

};
console.log(romanToInt('MMMCM'))