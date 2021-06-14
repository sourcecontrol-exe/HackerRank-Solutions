
t = int(input())
race = [10, 21, 42]
for i in range(t):
    prize = 0
    D, d, A, B, C = map(int, input().split())
    totalDistance = d*D
    if(totalDistance <10):
        print(0)
    else:
        if(10 <= totalDistance < 21):
            print(A)
        if(21 <= totalDistance < 42):
            print(B)
        if(42 <= totalDistance):
            print(C)
