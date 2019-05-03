import random
import os
import sys

constants = ["(-1)", "0", "1", "2", "10"]

objects = ["a", "b", "c", "d", "e"]

unary_operation = ["++", "--"]

binary_operations = ["+", "-", "*", "/"]

infix_test = ["==", "!=", "<", ">", ">=", "<="]

simple_affectation = "="

extended_affectation = ["+=", "-=", "*=", "/="]

def alea_liste(liste, max_index=None):
    """
    """
    if max_index is not None:
        return liste[random.randint(0, max_index)]
    else:
        return liste[random.randint(0, len(liste)-1)]

def generate_r_value(nb_object, complexity):
    """
    """
    if complexity <= 0:
        return alea_liste(constants + objects[0:nb_object])
    if complexity == 1:
        nb_options = 5
        # a var
        # a binary operation
        # a binary operation with paranthesis
        roll = random.randint(0,nb_options-1)
        if roll <= 2:
            return alea_liste(objects, nb_object-1)
        elif roll == 3:
            return generate_r_value(nb_object, 0) + ' ' + alea_liste(binary_operations) + ' ' + generate_r_value(nb_object, 0)
        else:
            return '(' + generate_r_value(nb_object, 0) + ' ' + alea_liste(binary_operations) + ' ' + generate_r_value(nb_object, 0) + ')'
    nb_options = 2
    # a binary operation
    # a binary operation with paranthesis
    roll = random.randint(0,nb_options-1)
    comp_l = random.randint(0, complexity-1)
    comp_r = complexity-1-comp_l
    if roll == 0:
        return generate_r_value(nb_object, comp_l) + ' ' + alea_liste(binary_operations) + ' ' + generate_r_value(nb_object, comp_r)
    else:
        return '(' + generate_r_value(nb_object, comp_l) + ' ' + alea_liste(binary_operations) + ' ' + generate_r_value(nb_object, comp_r) + ')'

def generate_test(nb_object, complexity):
    comp_l = random.randint(0, complexity-1)
    comp_r = complexity-1-comp_l
    return '(' + generate_r_value(nb_object, comp_l) + ' ' + alea_liste(infix_test) + ' ' + generate_r_value(nb_object, comp_r) + ')'

def genearte_affectation(nb_object, complexity):
    if complexity <= 0:
        return alea_liste(objects, nb_object-1) + ' ' + simple_affectation + ' ' + generate_r_value(nb_object, complexity-1)
    if random.randint(0,1) == 0:
        return alea_liste(objects, nb_object-1) + ' ' + simple_affectation + ' ' + generate_r_value(nb_object, complexity-1)
    else:
        return alea_liste(objects, nb_object-1) + ' ' + alea_liste(extended_affectation) + ' ' + generate_r_value(nb_object, complexity-2)

def generate_instruction(nb_object, complexity):
    return genearte_affectation(nb_object, complexity) + ';'


def alea_split(complexity, max_entry=None):
    top = max(1, complexity)
    i = random.randint(1, top)
    if i >= top - (top // 5):
        if (max_entry is None) or complexity <= max_entry:
            return [complexity]
        else:
            if random.randint(0, 1) == 0:
                return [max_entry] + alea_split(max(1, complexity-max_entry), max_entry)
            else:
                return alea_split(max(1, complexity-max_entry), max_entry) + [max_entry]
    if max_entry is not None and i > max_entry:
        i = random.randint(1, max_entry)
    if random.randint(0, 1) == 0:
        return [i] + alea_split(max(1, complexity-i), max_entry)
    else:
        return alea_split(max(1, complexity-i), max_entry) + [i]


def generate_test_block(nb_object, complexity):
    L = alea_split(complexity)
    code = 'if ' + generate_test(nb_object, L[0]) + '{\n'
    for i in range(1, len(L)):
        code += '  ' + generate_instruction(nb_object, L[i]) + '\n'
    if len(L) == 1:
        code += '  ' + generate_instruction(nb_object, 1) + '\n'
    code += '}'
    return code

def initialisation_code(nb_object):
    L = ["int a;", "int b;", "int c;", "int d;", "int e;"]
    code = '\n'.join(L[0:nb_object])
    code += '\n'
    for i in range(nb_object):
        code += '\n' + objects[i] + " = " + alea_liste(constants) + ";"
    return code + '\n'

def generate_thread_code(nb_object, complexity, max_entry=None):
    L = alea_split(complexity, max_entry)
    code = initialisation_code(nb_object)
    for comp in L:
        if random.randint(0, 2) == 0:
            code += generate_test_block(nb_object, comp) + '\n'
        else:
            code += generate_instruction(nb_object, comp) + '\n'
    return code


def full_code(nb_object, code):
    """
    Return a C valid programm containing the `code` in argument and
    printing the values of the variables on the standard output after
    execution.
    """
    prog = '#include <stdio.h>'
    prog += '\n\nint main(int argc, char* argv[]){\n'
    prog += code
    prog += '\n'
    prog += 'printf("' + ' '.join(['%d']*nb_object) + '", ' + ', '.join(objects[0:nb_object]) + ');\n'
    prog += '}'
    return prog


def get_result(nb_object, code):
    """
    Return a python list which is the values of the variables at end
    of execution of the block of `code`.
    """
    prog = full_code(nb_object, code)
    source = open("source.c", "w")
    source.write(prog)
    source.close()

    os.system('gcc -o prog_alea source.c 2> /dev/null')
    os.system('./prog_alea > values 2> /dev/null')

    output = open("values", "r")
    str_values = output.read()
    output.close()

    if len(str_values) > 1:
        return list(map(int, str_values.split(' ')))
    return None

def subnlbybr(str):
    """
    Substitute each occurences of char '\n' by '<br />' in the string
    `str` in argument.

    EXAMPLES::

        >>> subnlbybr("\\n")
        '<br/>'
    """
    return "<br/>".join(str.split("\n"))

def double_with_tab(str):
    return "\n\t".join(str.split("\n"))

def build(dic):
    d = dict(dic)
    if 'seed' not in d:
        import time
        d['seed']=str(time.time())
    random.seed(d['seed'])
    code = generate_thread_code(int(d.get('nb_variables',2)), 
				int(d.get('complexity',12)), 
				int(d.get('instruct_complexity',4)))
    values = get_result(2, code)
    d['vars_values'] = values
    d['text'] = "Voici quelle instructions simples en langage C manipulant des variables entières \n\n\n\n" + double_with_tab("\t"+code) + "\n\nDonnez la valeur de la variable **a** en fin d'exécution de ce bout de code ou bien entrez **Erreur** en cas d'erreur durant l'exécution (division par zéro).\n"
    d['responses'] = values
    return d

