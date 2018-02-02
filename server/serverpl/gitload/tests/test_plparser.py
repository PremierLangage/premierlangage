from pysrc import plparser

import pytest




@pytest.mark.django_db
class TestPlParser():
    
    def test_allwayscorrect(self, plbank_present):
        assert plbank_present
        
        dic, warning = plparser.dicFromFile('test/allwayscorrect.pl', 'plbank')
        if warning:
            print(warning)
        assert 'rel_path' in dic
        assert 'title' in dic
        assert 'tag' in dic
        assert 'author' in dic
        assert 'text' in dic
        assert 'grader' in dic
        assert 'type' in dic
        assert 'evaluator' in dic
        assert 'form' in dic
        assert 'build' in dic
        del dic['rel_path']
        del dic['title']
        del dic['tag']
        del dic['author']
        del dic['text']
        del dic['grader']
        del dic['soluce']
        del dic['type']
        del dic['evaluator']
        del dic['form']
        del dic['basefiles']
        del dic['name']
        if 'comment' in dic:
            del dic['comment']
        assert not dic
    
    
    def test_test1(self, plbank_present):
        assert plbank_present
        
        dic, warning = plparser.dicFromFile('test/test1.pl', 'plbank')
        print(warning)
        assert not dic
        assert warning == "Syntax error (l.8): 'EN DEHORS DE TAG'"


    def test_test2(self, plbank_present):
        assert plbank_present
        
        dic, warning = plparser.dicFromFile('test/test2.pl', 'plbank')
        print(warning)
        assert dic
        assert warning == "Warning (l.9): multiline value declared inside another (declared at l.7).\n"
    
    
    def test_test3(self, plbank_present):
        assert plbank_present
        
        dic, warning = plparser.dicFromFile('test/test3.pl', 'plbank')
        print(warning)
        assert not dic
        assert warning == "Key: unclosed - Value on multiple line is never closed (Can't find '==') - line 32"
    
    
    def test_test4(self, plbank_present):
        assert plbank_present
        
        dic, warning = plparser.dicFromFile('test/test4.pl', 'plbank')
        print(warning)
        assert not dic
        assert warning == "Key: no_value - Multiline value can't be null - line 7"
        
    def test_test5(self, plbank_present):
        assert plbank_present
        
        dic, warning = plparser.dicFromFile('test/test5.pl', 'plbank')
        print(warning)
        assert not dic
        assert warning[-20:-2] == "plbank/vieu/chemin"
        
        
    def test_allwayspltp(self, plbank_present):
        assert plbank_present
        
        dic, warning = plparser.dicFromFile('test/alwayscorrect.pltp', 'plbank')
        if warning:
            print(warning)
            
        print("################### EVERY KEY ####################")
        for k,v in dic.items():
            print(k+": "+str(v))
        
        assert 'rel_path' in dic
        assert 'title' in dic
        assert 'tag' in dic
        assert 'introduction' in dic
        assert 'conceptl' in dic
        assert 'title' in dic
        assert 'sha1' in dic
        assert 'name' in dic
        assert 'author' in dic
        del dic['rel_path']
        del dic['title']
        del dic['introduction']
        del dic['conceptl']
        del dic['author']
        del dic['sha1']
        del dic['name']
        del dic['tag']
        if 'comment' in dic:
            del dic['comment']
            
        print("################### REMAINING KEY ####################")
        for k,v in dic.items():
            print(k+": "+str(v))
            
        assert not dic
        
        
    def test_syntax_error_pltp(self, plbank_present):
        assert plbank_present
        
        dic, warning = plparser.dicFromFile('test/syntax_error.pltp', 'plbank')
        print(warning)
        assert not dic
        assert warning == "Syntax error, key without value (l.24): 'value='"
        
    
    def test_missing_concept_pltp(self, plbank_present):
        assert plbank_present
        
        dic, warning = plparser.dicFromFile('test/missing_concept.pltp', 'plbank')
        print(warning)
        assert not dic
        assert warning == "No excercice found in the PLTP."
    
    
    def test_wrong_concept_pltp(self, plbank_present):
        assert plbank_present
        
        dic, warning = plparser.dicFromFile('test/wrong_concept.pltp', 'plbank')
        print(warning)
        assert not dic
        assert warning == "Can't find file '/mauvais/chemin.pl' in repo plbank"
