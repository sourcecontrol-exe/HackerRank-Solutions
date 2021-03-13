def contArray(n, k, x):
    ans = 1
    for i in range(1,n-1):
        print(i)
        if(i== n-2):
            ans+=(k-2)
        else:
            ans*= (k-1)
    return ans


nkx= input().split()
n = int(nkx[0])
k = int (nkx[1])
x = int(nkx[2])

ans = contArray(n,k,x)
print(ans)