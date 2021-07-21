def gcd(a,b,set={}):
    key = str(a)+str(b)
    if(key in set): return set[key]
    if(b==0):
        return a
    set[key]=gcd(b,a%b,set)
    return set[key]

t = int(input())
for i in range(t):
    result = 0
    k = int(input())
    
    for j in range(1,2*k+1):
        result+=gcd(k+j*j,k+(j+1)*(j+1))
    
    print(result%1000000007)