echo "Checking dependencies..."

if [ "$VIRTUAL_ENV" == "" ]; then
  INVENV=1
  echo -e "ERROR: The installation should run under Virtual Environnement
--> check the virtuelenv's documentation : https://virtualenv.pypa.io/en/stable/"
  exit 1
fi

OS=$(uname -s)
echo "$OS"

#Cheking if this is an apple OS
if [ "$OS" = "Darwin" ]; then
   if ! hash brew; then
       echo "ERROR: brew should be installed. visit https://brew.sh/ "
       echo "ERROR: brew should be installed. visit https://brew.sh/ "
       exit 1
   fi
  brew install libmagic
fi

#Checking if zip is installed
if ! hash zip; then
    echo "ERROR: zip should be installed. Try 'apt-get install zip'"
    exit 1
fi
echo "zip: OK !"

#Checking if python >= 3.5 is installed
if ! hash python3; then
    echo "ERROR: Python >= 3.5 should be installed."
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

#Getting requirement
echo ""
echo "Installing requirements..."
pip3 install wheel  || { echo>&2 "ERROR: pip3 install wheel failed" ; exit 1; }
pip3 install -r requirements.txt || { echo>&2 "ERROR: pip3 install -r requirements.txt failed" ; exit 1; }
echo "Done !"

#Getting release settings.py
echo "creating setting and secret key"
cp -f serverpl/install/settings_release.py serverpl/settings.py
python3 serverpl/genkey.py >>settings.py

#Creating documentation
echo ""
echo "Creating documentation..."
./make_doc.sh || { echo>&2 "ERROR: ./make_doc.sh failed" ; exit 1; }
echo "Done !"

#Creating ../tmp and ../log
echo ""
echo "Creating needed directories..."
if [ ! -d "../../../tmp" ]; then
    mkdir ../../../tmp || { echo>&2 "ERROR: Can't create ../../../tmp" ; exit 1; }
fi
if [ ! -f "../../../tmp/README" ]; then
    echo "Directory used by premier langage, do not remove." > ../../../tmp/README
fi

#Building database
source /etc/apache2/envvars
echo ""
echo "Configuring database..."
SECRET_KEY=$SECRET_KEY python3 manage.py migrate || { echo>&2 "ERROR: python3 manage.py migrate failed" ; exit 1; }
echo "Done !"

echo ""
echo "Creating super user account..."
SECRET_KEY=$SECRET_KEY python3 manage.py createsuperuser || { echo>&2 "ERROR: python3 manage.py createsuperuser failed" ; exit 1; }
