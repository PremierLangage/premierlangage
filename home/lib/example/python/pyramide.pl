
extends = /template/python.pl

title = Building a pyramid

text ==
You get an integer `B` as argument of the program.

You need to outputs two integer `N` and `R` on one line.

* `N` must be the height of tallest the pyramid you can build with `B` blocks. To build the pyramid, you need 1 block for the first floor, 2 blocks for the second, 3 for the third, etc...
* `R` must be the number of blocks remaining.

For example, if you got `10`, you must output `4 0` as you will need 4 + 3 + 2 + 1 = 10 blocks to build 4 floors and there will be 0 remaining blocks.
==

stdout_tests==
10 "4 0" 10
250 "21 19" 250
15 "5 0" 15
20 "5 5" 20
21 "6 0" 21
"" "20 20" 230
"" "21 0" 231
"" "21 1" 232
==

soluce==
import sys

if __name__ == "__main__":
    k = int(sys.argv[1])
    c = 0
    while k > c:
        c += 1
        k -= c
    print(c, k)
==
