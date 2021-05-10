t = int(input())
for i in range(t):
    cx=0
    co=0
    cnil=0
    
    l=[]
    for i in range(3):
        tic = input()
        l.append(tic)
    
    for i in range(3):
        for j in range(3):
            if l[i][j] == "X":
                cx+=1
            elif l[i][j] == "O":
                co+=1
            elif l[i][j] =="_":
                cnil+=1
    
    hx = 0
    ho = 0
    
    if l[0][0] == 'X' and l[0][1] == 'X' and l[0][2]=="X":
        hx = 1
    if l[1][0] == 'X' and l[1][1] == 'X' and l[1][2] =='X':
        hx = 1
    if l[2][0] == 'X' and l[2][1] == 'X' and l[2][2] =='X':
        hx = 1
    if l[0][0] == 'X' and l[1][0] == 'X' and l[2][0] =='X':
        hx = 1
    if l[0][1] == 'X' and l[1][1] == 'X' and l[2][1] =='X':
        hx = 1
    if l[0][2] == 'X' and l[1][2] == 'X' and l[2][2] =='X':
        hx = 1
    if l[0][0] == 'X' and l[1][1] == 'X' and l[2][2] =='X':
        hx = 1
    if l[0][2] == 'X' and l[1][1] == 'X' and l[2][0] =='X':
        hx = 1
    
    if l[0][0] == 'O' and l[0][1] == 'O' and l[0][2]=="O":
        ho = 1
    if l[1][0] == 'O' and l[1][1] == 'O' and l[1][2] =='O':
        ho = 1
    if l[2][0] == 'O' and l[2][1] == 'O' and l[2][2] =='O':
        ho = 1
    if l[0][0] == 'O' and l[1][0] == 'O' and l[2][0] =='O':
        ho = 1
    if l[0][1] == 'O' and l[1][1] == 'O' and l[2][1] =='O':
        ho = 1
    if l[0][2] == 'O' and l[1][2] == 'O' and l[2][2] =='O':
        ho = 1
    if l[0][0] == 'O' and l[1][1] == 'O' and l[2][2] =='O':
        ho = 1
    if l[0][2] == 'O' and l[1][1] == 'O' and l[2][0] =='O':
        ho = 1
        
    if(hx ==1 and ho ==1)  or (cx-co<0) or (cx-co>1):
        print(3)
    elif cx==0 and co==0 and cnil==9:
        print(2)
    elif hx==1 and ho==0 and cx>co:
        print(1)
    elif hx ==0 and ho == 1 and cx==co:
        print(1)
    elif hx ==0 and ho ==0 and cnil==0:
        print(1)
    elif hx==0 and ho ==0 and cnil>0:
        print(2)
    else:
        print(3)