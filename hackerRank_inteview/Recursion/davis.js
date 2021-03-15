function davis(n,set={}){
    if(n in set) return set[n];
    if(n==1) return 1;
    if(n==2) return 2;
    if(n == 3) return 4;
    
    set[n]=davis(n-1)+davis(n-2,set)+davis(n-3,set)
    return set[n]
}
 let a = davis(44)
 console.log(a)