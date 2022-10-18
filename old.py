

# in python we have to decalre and assign the var at the same time

somebool = True


x,y = [1,2]
print(x) #1
print(y) #2
z=["a","b","c"]
print(", ".join(z))

print(z[1:3])
print(z.append(4))
print(z.index('b'))

alist=[1,2,3]
i = 0
while i < len(alist):
    print(alist[i])
    i+=1
for i in range(len(alist)):
    print(alist[i])