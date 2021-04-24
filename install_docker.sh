#!/bin/bash
#https://stackoverflow.com/questions/37836764/run-command-in-docker-container-only-on-the-first-start

cd ${PL_HOME} 
CONTAINER_ALREADY_STARTED="CONTAINER_ALREADY_STARTED_PLACEHOLDER"

if [ ! -e $CONTAINER_ALREADY_STARTED ]; then
    touch $CONTAINER_ALREADY_STARTED
    echo "-- First container startup --"
	#Getting requirements
	echo ""
	echo "Installing requirements..."
	pip3 install wheel  || { echo>&2 "ERROR: pip3 install wheel failed" ; exit 1; }
	pip3 install -r requirements.txt || { echo>&2 "ERROR: pip3 install -r requirements.txt failed" ; exit 1; }
	echo "Done !"

	#Creating needed directories
	echo ""
	echo "Creating needed directories..."
	if [ ! -d home/Yggdrasil ]; then
	    mkdir home/Yggdrasil || { echo>&2 "ERROR: Can't create home/Yggdrasil" ; exit 1; }
	fi
	if [ ! -d media ]; then
	    mkdir media || { echo>&2 "ERROR: Can't create media/" ; exit 1; }
	fi

	#Building database
	echo ""
	echo "Configuring database..."
	python3 manage.py makemigrations || { echo>&2 "ERROR: python3 manage.py makemigrations failed" ; exit 1; }
	python3 manage.py migrate || { echo>&2 "ERROR: python3 manage.py migrate failed" ; exit 1; }

	#Filling database
	python3 manage.py shell < script/fill_database_local.py || { echo>&2 "ERROR: python3 manage.py shell < script/fill_database_local.py failed" ; exit 1; }
	echo "Done !"
	
	#Creating static files
	echo ""
	echo "Creating static files..."
	python3 manage.py collectstatic --noinput || { echo>&2 "ERROR: python3 manage.py collectstatic failed" ; exit 1; }
	echo "Done !"

else
    echo "-- Not first container startup. Delete file \"CONTAINER_ALREADY_STARTED_PLACEHOLDER\" if you want to run the initialization process. --"
fi

echo "-- Run Server --"
python3 manage.py runserver 0.0.0.0:8021
