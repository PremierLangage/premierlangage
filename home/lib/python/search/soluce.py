n=int(input())
j1,j2=-1,-1
l=[]
diff=99999
for e in range(n):
	x=float(input())
	for i in range(len(l)):
		d=l[i]-x
		if d <0: d = -d
		if d < diff:
			diff = d
			j1,j2 = i,e
	l.append(x)

print(j1,j2)
