def minimum(a, b, c, d):
   return min(min(a, b), min(c, d))

a, b, c, d = map(int, input().split())

print(minimum(a, b, c, d))