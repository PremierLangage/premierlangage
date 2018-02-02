
title=Premier PyWims

template=/pywims/pywims_template.pl

before==
# random.randint(4,7) est un entier aléatoire choisi parmi 4, 5, 6, 7
n = random.randint(4,7)
m = random.randint(4,7)

r = random.randint(math.ceil(min(n,m)/2), min(n,m))
t = random.randint(0,2)

# range(n) = [0,1,.., n-1]. sample(liste, r) renvoie une liste de 'r' éléments choisis au pif dans la liste, et pas dans l'ordre, sans répétition.
J = random.sample(range(n),r)
J.sort()

# une matrice de zéros
A = zeros(m,n)

# Attention: les indices de matrices commencent à zéro.
for i in range(r) :
    A[i,J[i]] = random.randint(0,3)+1
    if J[i] < n-1:
        for j in range(J[i]+1, n) : 
            A[i,j] = random.randint(0,5) - 2

if (t == 0) or (t == 1 and r == 1) or (t == 2 and r == m): bonne_reponse = 'oui'
elif (t == 1) and (r > 1) :
    k = random.randint(1,r-1)
    for j in range(J[k]) : 
        A[k-1,j] = 0
    bonne_reponse = 'non'
elif (t == 2) and (r < m) :
    k = random.randint(r+1,m)
    A[k-1,J[r-1]] = random.randint(0,3) + 1
    bonne_reponse = 'non'

choix_reponse = ['Choisir', 'oui', 'non']
==

form==
La matrice  
$$ {{ A }} $$
 est-elle échelonnée ? 
{% input_select 'reponse' choix_reponse %}
==

after==
if reponse == bonne_reponse : 
    feedback = 'Bonne réponse, bravo'
    success = True
if reponse != bonne_reponse :
    success = False
    feedback = 'Mauvaise réponse, recommencez'
==

feedback==
{{ feedback }}
==
