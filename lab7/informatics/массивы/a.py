a=int(input())
n=list(map(int,input().split()))

for i in range(a):
    if i%2==0:
        print(n[i],end=' ')