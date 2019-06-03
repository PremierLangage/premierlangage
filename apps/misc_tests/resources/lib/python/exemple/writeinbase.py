
def digit(value):
	if 0<= value <= 9 : 
		return chr(ord('0')+value)
	if 10<= value <=35 :
		return chr(ord('A')+(value-10))
	raise IndexError

def writeinbase(entier,base):
	if entier >base :
		return writeinbase(entier//base,base)+digit(entier%base)
	else:
		return digit(entier)




print(writeinbase(7,2)) # 111
print(writeinbase(12345678,10)) # 12345678
print(writeinbase(51966,16)) # CAFE

