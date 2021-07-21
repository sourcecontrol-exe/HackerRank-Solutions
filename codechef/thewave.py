
def countGreater(arr, n, k):
    l = 0
    r = n - 1
    while(l<=r):
        mid = l+(r-l)//2
        if(arr[mid] < k):
            l = mid+1
        elif(arr[mid] == k):
             return -1
        else:
            r = mid-1
    return l


N, Q = map(int, input().split())
A = list(map(int, input().strip().split()))
p = "POSITIVE"
n = "NEGATIVE"

A.sort()
length = len(A)

for q in range(Q):
    x = int(input())

    y = countGreater(A, length, x)
    print(y, A)
    if y == -1:
        print("0")
    elif y % 2 == 1:
        print(n)
    else:
        print(p)
