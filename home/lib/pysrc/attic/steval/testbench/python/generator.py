#! /usr/bin/env python3
"""
Offer some useful functions to generate input data

@author: chilowi at u-pem.fr
"""

DEFAULT_ALPHABET = "abcdefghijklmnopqrstuvwxyz"

import random


def random_list(length, alphabet = DEFAULT_ALPHABET):
	rand = lambda: random.randrange(0, len(alphabet))
	return list(map(lambda x: alphabet[rand()], range(0, length)))
	
def random_string(length, alphabet = DEFAULT_ALPHABET):
	return "".join(random_list(length, alphabet))
	

