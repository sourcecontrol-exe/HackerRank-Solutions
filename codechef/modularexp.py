t = int(input())
for x in range(t):
    firstline = input().split()
    n = int(firstline[0])
    m = int(firstline[1])
    ans =0
    l = [1]*(n+1)
    for i in range(2,n+1):
        #print(i,m%i)
        a= m%i
        ans+=l[a]
       # print(ans)
        for j in range(a,n+1,i):
            l[j]=l[j]+1
            #print(l[j])
    print(ans)
   