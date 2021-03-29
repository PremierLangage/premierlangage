#!/usr/bin/env bash
if [ -e processed.json ]
then
	rm pl.json
	mv processed.json pl.json
fi
