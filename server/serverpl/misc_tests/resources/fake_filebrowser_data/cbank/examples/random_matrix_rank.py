from random import randint
from copy import copy

def perm_n(n):
    """
    Returns a random permutation (integer list) of size `n`.
    
    TESTS:
       >>> sorted(perm_n(5)) == range(1, 5+1)
       True
    """  
    if (n == 1):    
        return [1]
    else:
        position = randint(0, n-1)
        sub_perm = perm_n(n-1)
        return sub_perm[:position] + [n] + sub_perm[position:]

def sequence_pivots(n):
    """
    Generate a sequence of positions for pivots with possible 
    repetitions or ablation. The fonction returns between `n-2`
    and `n+2` values bounded by `1` and `n`.
    
    TESTS:
        >>> max(sequence_pivots(5)) <= 5
        True
        >>> min(sequence_pivots(6)) >= 1
        True
    """
    seq = [randint(1, n-1) for j in range(randint(n-2, n+2))]
    seq.sort()
    return seq

def uniq_pivots(seq):
    """
    Returns the list built from `seq` in which all repetition  
    have been deleted.
    
    TESTS:
        >>> uniq_pivots([1,1,1,3,4,5,5,6,6,8,9])
        [1,3,4,5,6,8,9]
    """
    return sorted(list(set(seq)))
    
def gen_pivots(seq_red):
    """
    Returns a list of valid non zero pivots.
    
    TESTS:
    
    """
    pivots = []
    for i in seq_red:
        piv = randint(-5, 9)
        while (piv == 0):
            piv = randint(-5, 9)
        pivots.append(piv)
    return pivots
    
def generate_mat(n, seq):
    """
    Generate vectors of size `n` whose pivots are placed at 
    positions described in `seq`.
    
    TESTS::
    """
    seq_red = uniq_pivots(seq)
    pivots = gen_pivots(seq_red)
    # generate uniq vector
    res = []
    for k, pos in enumerate(seq_red):
        vect = []
        for i in range(n):
            if (i+1 < pos):
                vect.append(0)
            elif (i+1 == pos):
                vect.append(pivots[k])
            else:
                vect.append(randint(-9,9))
        res.append(vect)
    mat = []
    k = 0
    for p in seq:
        while p > seq_red[k]:
            k += 1
        mat.append(copy(res[k]))
    return mat
    
def permut_mat(mat):
    n = len(mat)
    perm = perm_n(n)
    mat2 = [None]*n
    for i in range(1, n+1):
        mat2[i-1] = mat[perm[i-1]-1]
    return mat2
    
def make_latex(mat):
    """
    Return latex code to define `mat`.
    """
    print(mat)
    n = len(mat)
    latex = "$% \\left( \\begin{array}{" + ("c"*n) + "}  "
    for i in range(len(mat[0])-1, -1, -1):
        latex += " & ".join([str(mat[j][i]) for j in range(n)]) + "\\newline  " 
    latex += "\\end{array} \\right) %$  "
    return latex

def rand_mat_rank(n):
    """
    Returns the latex code of a random matrix of rank `n` and 
    its rank.
    
    TESTS:
    """
    L = sequence_pivots(n)
    rank = len(uniq_pivots(L))
    mat = permut_mat(generate_mat(n, L))
    return make_latex(mat), rank
