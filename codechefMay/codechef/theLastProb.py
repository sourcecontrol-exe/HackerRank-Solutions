def recursive(x,y, sum=0):
        if(x == 0 and y == 0): return sum+1
        if(x<0 or y<0): return 

t = int(input())
for _ in range(t):
       x1,y1,x2,y2 = map(int, input().split())
       