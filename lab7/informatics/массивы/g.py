n = int(input())
a = list(map(int, input().split()))
d = n-1
for i in range(0,int((n)/2)):
    a[i],a[d] = a[d],a[i]
    d-=1
for i in a:
    print(i,end = ' ')