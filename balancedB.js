function isBalanced(s) {

    let rev = [];
   
    for(let i =0; i < s.length; i++){
        
        if((s[i] ==")" && rev[rev.length-1]=="(")
                ||  (s[i] =="]" && rev[rev.length-1]=="[") || 
        (s[i] =="}" && rev[rev.length-1]=="{")){
            rev.pop();
        }
        else{
            rev.push(s[i]);
        }
    }
    if(rev.length == 0 ) return "YES"
    else return "NO"
}

console.log(isBalanced("{(([])[])[]]}"));
