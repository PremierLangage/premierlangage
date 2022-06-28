#!/bin/bash

echo -e "\nChecking dependencies...\n"

OS=$(uname -s)
echo -e "OS: $OS\n"


#Cheking if this is an apple OS
if [ "$OS" = "Darwin" ]; then
    if ! hash brew; then
        echo "ERROR: brew should be installed. visit https://brew.sh/ "
        exit 1
    fi
    brew install libmagic
fi


#Checking if zip is installed
if ! hash zip; then
    echo "ERROR: zip should be installed. Try 'apt-get install zip' "
    exit 1
fi
echo "Zip >= 3.5: OK !"


#Checking if python >= 3.5 is installed
if ! hash python3; then
    echo "ERROR: Python >= 3.5 should be installed. Try 'apt-get install python3'"
    exit 1
fi

ver=$(python3 --version 2>&1 | sed 's/.* \([0-9]\).\([0-9]\).*/\1\2/')
if [ "$ver" -lt "35" ]; then
    echo "ERROR: Python >= 3.5 should be installed."
    exit 1
fi
echo "Python >= 3.5: OK !"


#Checking if pip3 is installed
command -v pip3 >/dev/null 2>&1 || { echo >&2 "ERROR: pip3 should be installed"; exit 1; }
echo "pip3: OK !"


# Checking if inside a python venv
if [ "$VIRTUAL_ENV" == "" ]; then
    echo ""
    INVENV=1
    echo "WARNING: You're not currently running a virtual environnement (https://docs.python.org/3/library/venv.html)." | fold -s
    read -p "Do you want to continue outside a virtual environnement ? [Y/N] " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Nn]$ ]]
    then
        exit 1
    fi
fi


#Getting requirement
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
if [ ! -d static ]; then
    mkdir static || { echo>&2 "ERROR: Can't create static/" ; exit 1; }
fi
if [ ! -d media ]; then
    mkdir media || { echo>&2 "ERROR: Can't create media/" ; exit 1; }
fi


#Creating static files
echo ""
echo "Creating static files..."
python3 manage.py collectstatic --noinput || { echo>&2 "ERROR: python3 manage.py collectstatic failed" ; exit 1; }
echo "Done !"


#Building database
echo ""
echo "Configuring database..."
SECRET_KEY=$SECRET_KEY python3 manage.py makemigrations || { echo>&2 "ERROR: python3 manage.py makemigrations failed" ; exit 1; }
SECRET_KEY=$SECRET_KEY python3 manage.py migrate || { echo>&2 "ERROR: python3 manage.py migrate failed" ; exit 1; }

#Filling database
SECRET_KEY=$SECRET_KEY python3 manage.py shell < script/fill_database_release.py || { echo>&2 "ERROR: python3 manage.py shell < script/fill_database_release.py failed" ; exit 1; }
echo "Done !"


# Creating super user
echo
read -p "Creating a super user for django ? [y/n] " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
    echo "Creating super user account..."
    SECRET_KEY=$SECRET_KEY python3 manage.py createsuperuser || { echo>&2 "ERROR: python3 manage.py createsuperuser failed" ; exit 1; }
fi

# Indexing home folder for elastic search
echo
read -p "Index home folder ? [y/n] " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
    echo "Indexing home folder..."
    python3 script/index.py
    if [ $? -eq 0 ]
    then
        echo "Done !"
    else
        echo "Error while indexing"
    fi
fi