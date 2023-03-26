# n=int(input())
# if(n==1):
#     print("NO")
# i=2
# while i<=n:
#     if(i*i==n):
#         print("YES")
#         break
#     else:
#         print("NO")
#         break
# i+=1
n = int(input())

while n>1:
    n=n/2
    
if n==1:
    print("YES")
else:
    print("NO")