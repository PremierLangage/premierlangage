
''' create the files to be send to executor

student - is a string containing the answer
codetest - is an array of string containing the codetest
pltest - is an array of string containing the test of the pl
path - is the path where the files will be created

'''
def create_files(student, codetest, pltest, path):
    plt_file = open(path + "pltest.txt", "w")
    for line in pltest:
        plt_file.write(line)
    
    plt_file.close
    
    student_file = open(path + "student.py", "w")
    student_file.write(line)
    student_file.close
    
    code_tst_file = open(path + "codetest.py", "w")
    for line in codetest:
        code_tst_file.write(line)
    
    code_tst_file.close
    


