# def isSubsequence(s,t):
#     index = 0
#     for i in range(len(t)):
#         if(s[index] == t[i] and s[index+1]):
#             index+=1
    
#     if(index == len(s)):
#         return True
#     else:
#         return False

def isSubsequence(s: str, t: str) -> bool:
        ind = 0
        find = 0
        ls = len(s)
        lt = len(t)
        if ls==0:
            return True
        if ls>lt:
            return False
        while(ind<ls and find<lt):
            if s[ind]==t[find]:
                ind+=1
            find+=1
        return ind==ls
    
    
tests = int(input())
for test in range(tests):
    st = str(input())
    temp = -1
    result = True
    while(result == True):
        temp+=1
        result = isSubsequence("{0:b}".format(temp),st)
    
    print("{0:b}".format(temp))