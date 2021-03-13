function unique(m,n, set={}){
    let key = m+","+n;
    if(key in set){
        return set[key]
    }
    if(m == 1 && n ==1) return 1;
    if(m ===0|| n===0)  return 0;  
    set[key] = unique(n-1,m,set)+unique(n,m-1,set);
    return set[key]
}
let a = unique(2,2)
console.log(a)