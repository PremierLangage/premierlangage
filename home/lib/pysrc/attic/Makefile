# Makefile generating the sandbox library

SANDBOXDIR = steval/executor/sandbox

all: $(SANDBOXDIR)/seccomputils.so

%.o: %.c
	gcc -c -fPIC -o $@ $<

%.so: %.o
	gcc -shared -o $@ $<
