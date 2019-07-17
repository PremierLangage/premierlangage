extends = ~/template/python.pl

title = Encryption of Enigma Machine

text ==
During World War II, the Germans were using an encryption code called Enigma – which was basically an encryption machine that encrypted messages for transmission.

Here is how enigma works:
First, a Caesar shift is applied with an incrementing number, for example, AAA with 1 outputs BCD.
Then, the message goes through three rotors, for example, if BCD goes through a rotor "BDFHJLCPRTXVZNYEIWGAKMUSQO" it becomes DFH.

You need to write a function `enigma_encode` that takes a message, a list of three rotors and a shift number and that outputs the encrypted message.

==

before=

editor.code==
def enigma_encode(message, rotors, shift):
    pass

==

unittest==#|python|
import unittest
from student import enigma_encode

def shift_val(x, n):
    return (x+n)%26

def str_to_int_list(s):
    return [ord(x)-ord('A') for x in s]

def encode(message, rotors, shift):
    message = str_to_int_list(message)
    message = [shift_val(message[i], shift+i) for i in range(len(message))]
    for i in range(3):
        message = str_to_int_list([rotors[i][x] for x in  message])
    return "".join([chr(x+ord('A')) for x in message])

rotors = ["BDFHJLCPRTXVZNYEIWGAKMUSQO", "AJDKSIRUXBLHWTMCQGZNPYFVOE", "EKMFLGDQVZNTOWYHXUSPAIBRCJ"]

class EncodeTestCase(unittest.TestCase):
    def test_3(self):
        assert enigma_encode("AAA", rotors, 4) == encode("AAA", rotors, 4)

    def test_23(self):
        assert enigma_encode("WEATHERREPORTWINDYTODAY", rotors, 7) == encode("WEATHERREPORTWINDYTODAY", rotors, 7)

    def test_21(self):
        assert enigma_encode("EVERYONEISWELCOMEHERE", rotors, 9) == encode("EVERYONEISWELCOMEHERE", rotors, 9)

    def test_42(self):
        assert enigma_encode("EVERYONEISWELCOMEHEREEVERYONEISWELCOMEHERE", rotors, 9) == encode("EVERYONEISWELCOMEHEREEVERYONEISWELCOMEHERE", rotors, 9)

if __name__ == '__main__':
    unittest.main()
==



 
