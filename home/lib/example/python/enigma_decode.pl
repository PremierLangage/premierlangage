extends = ~/template/python.pl

title = Decryption of Enigma Machine

text ==
During World War II, the Germans were using an encryption code called Enigma – which was basically an encryption machine that encrypted messages for transmission.

Here is how enigma works:

* First, a Caesar shift is applied with an incrementing number, for example, AAA with 1 outputs BCD.
* Then, the message goes through three rotors, for example, if BCD goes through a rotor "BDFHJLCPRTXVZNYEIWGAKMUSQO" it becomes DFH.

You need to write a function `enigma_decode` that takes an encrypted message, a list of three rotors and a shift number and that outputs the decoded message.

==

editor.code==
def enigma_decode(message, rotors, shift):
    pass

==

unittest==#|python|
import unittest
from student import enigma_decode

def shift_val(x, n):
    return (x+n)%26

def str_to_int_list(s):
    return [ord(x)-ord('A') for x in s]

def decode(message, rotors, shift):
    for i in range(2,-1,-1):
        message = "".join([chr(rotors[i].index(x)+ord('A')) for x in message])
    message = str_to_int_list(message)
    message = [shift_val(message[i], -shift-i) for i in range(len(message))]
    return "".join(chr(x+ord('A')) for x in message)

rotors = ["BDFHJLCPRTXVZNYEIWGAKMUSQO", "AJDKSIRUXBLHWTMCQGZNPYFVOE", "EKMFLGDQVZNTOWYHXUSPAIBRCJ"]

class DecodeTestCase(unittest.TestCase):
    def test_decode21(self):
        assert enigma_decode("PQSACVVTOISXFXCIAMQEM", rotors, 9) == decode("PQSACVVTOISXFXCIAMQEM", rotors, 9)
        assert enigma_decode("PQSACVVTOISXFXCIAMQEM", rotors, 9) == "EVERYONEISWELCOMEHERE"
    

    def test_decode49(self):
        assert enigma_decode("XPCXAUPHYQALKJMGKRWPGYHFTKRFFFNOUTZCABUAEHQLGXREZ", rotors, 5) == decode("XPCXAUPHYQALKJMGKRWPGYHFTKRFFFNOUTZCABUAEHQLGXREZ", rotors, 5)
        assert "THEQUICKBROWNFOXJUMPSOVERALAZYSPHINXOFBLACKQUARTZ" == enigma_decode("XPCXAUPHYQALKJMGKRWPGYHFTKRFFFNOUTZCABUAEHQLGXREZ", rotors, 5)

if __name__ == '__main__':
    unittest.main()
==




