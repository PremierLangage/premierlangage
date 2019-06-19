#!/bin/bash


#COLORS

# Reset

Color_Off='\033[0m';       # Text Reset

# Regular Colors

Red='\033[0;31m';          # Red
Green='\033[0;32m';        # Green
Yellow='\033[0;33m';       # Yellow
Purple='\033[0;35m';       # Purple
Cyan='\033[0;36m';         # Cyan

# Update packages and Upgrade system

# Check mod wsgi python2

dpkg -l libapache2-mod-wsgi > /dev/null
if [ $? == 0 ]
then
	echo -e "$Yellow Checking if mod-wsgi is installed ... $Color_Off $Green OK $Color_Off \n"
else
	echo -e "$Yellow Checking if mod-wsgi is installed ... $Color_Off $Red NO $Color_Off \n"
	echo -e "$Yellow You should install mod-wsgi.$Color_Off"
	echo -e "$Yellow Use these command below :$Color_Off\n"
	echo -e "sudo apt-get update"
	echo -e "sudo apt-get install libapache2-mod-wsgi"
	echo -e "\n$Yellow Restart the script. $Color_Off"
	exit 1
fi	

# Install Apache

PATH_DIR=/etc/apache2/sites-enabled
echo -e "$Yellow \n Configuring Apache2 ... $Color_Off \n"
REGEX_PORT='[0-9]{1,4}$'
REGEX_SITE='((www|)|(https?|ftp|file)://)[-A-Za-z0-9\+&@#/%?=~_|!:,.;]*[-A-Za-z0-9\+&@#/%=~_|]+\.[a-zA-Z]{2,4}$'
REGEX_EMAIL='[a-zA-Z][a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$'

echo -e "$Cyan \n Please, specify a port you would connect, by default the port is : $Yellow $PORT $Color_Off\n"
read PORT
if [[ $PORT =~ $REGEX_PORT ]]
then
	echo -e "\n 	$Green The port $Color_Off $Yellow $PORT $Color_Off $Green will be used $Color_Off\n"
else
	echo -e "\n 	$Red The port $Color_Off $Yellow \"$PORT\" $Color_Off $Red isn't in a good format $Color_Off\n"
	PORT=443
	echo -e "\n 	$Green The default port $Color_Off $Yellow \"$PORT\" $Color_Off $Green will be used. $Color_Off\n"
	break
fi

while true
do
	echo -e "$Cyan \n Please, specify your server's url admin : $Color_Off\n";
    read URL
    if [[ $URL =~ $REGEX_SITE ]]
	then
		echo -e "\n 	$Green The server's url is $Color_Off $Yellow $URL $Color_Off\n"
		break
	else
		echo -e "\n 	$Red The server's url is $Color_Off $Yellow \"$URL\" $Color_Off $Red isn't supported $Color_Off\n"
	fi
done
while true
do
    echo -e "$Cyan \n Please, specify your e-mail admin :\n $Color_Off";
    read EMAIL
    if [[ $EMAIL =~ $REGEX_EMAIL ]]
    then
        echo -e "\n 	$Green Your e-mail admin is $Color_Off $Yellow $EMAIL $Color_Off and the url site is $Green $url $Color_Off\n"
        break
    else
        echo -e "\n 	$Red Your e-mail admin $Color_Off $Green \"$EMAIL\" $Color_Off $Red isn't supported $Color_Off\n"
    fi
done

#cd /etc/apache2/mods-enabled
echo -e "$Yellow \n Creating macro.conf in $PATH_DIR ... $Color_Off \n"
cd $PATH_DIR
rm premierlangage-auto.conf
touch premierlangage-auto.conf
echo -e "
<VirtualHost *:$PORT>
        ServerName $URL
        ServerAdmin $EMAIL

	ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined

    Alias /static /srv/local/pl/premierlangage/static/
    <Directory /srv/local/pl/premierlangage/static/>
        Require all granted
    </Directory>

    <Directory /srv/local/pl/premierlangage/premierlangage/>
        <Files wsgi.py>
            Require all granted
        </Files>
    </Directory>

    SetEnv PYTHONIOENCODING utf-8
    WSGIDaemonProcess pl python-path=/srv/local/pl/premierlangage/
    WSGIProcessGroup  pl
    WSGIScriptAlias / /srv/local/pl/premierlangage/premierlangage/wsgi.py
</VirtualHost>

" >> ./premierlangage-auto.conf