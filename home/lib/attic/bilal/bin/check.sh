#!/bin/bash
rootdir=$(git rev-parse --show-toplevel)
echo $rootdir
checking ()
{
    thetest=$rootdir/server/serverpl/tmp_test.py
    # nb of pl/pltp valid
    nb_pl=0
    nb_pltp=0
    for i in $*
    do
        touch $thetest

        cat > $thetest <<EOF
from pysrc.newcheck import checkplfile, checkpltpfile
from gitload.loader import loadPL, loadPLTP
from gitload.models import Repository

import pytest, hashlib
import os
import json

EOF
        echo "Creating test for: "$i
        fichier=$(basename $i)
        if [ ${fichier#*.} = "pl" ]
        # Writing testpl in the file 
        then
            cat >> $thetest <<EOF
@pytest.mark.django_db
def test_checkplfile():
    if ":" in "$i":
        r = Repository(name='$i'.split(':')[0],url='elsewhere',version=1)
    else:
        r = Repository(name='plbank',url='elsewhere',version=1)
        
    assert(checkplfile('$i', r, sandboxurl = 'http://127.0.0.1:8000/sandbox/?action=execute'))
EOF
            pytest $thetest
            # Test was collected and passed successfully
            if [ $? -eq 0 ]
            then
                let "nb_pl+=1"
                git commit -m " newcheck commit " $i
                echo "commit "$i
                #rm $thetest
            else
                echo "Test "$i" failed"
                rm $thetest
            fi
        elif [ ${fichier#*.} = "pltp" ]
        #Writing testpltp in the file 
        then
            cat >> $thetest <<EOF
@pytest.mark.django_db
def test_checkpltpfile():
    r = Repository(name=os.path.basename('$rootdir'),url='elsewhere',version=1)
    assert(checkpltpfile('$i', r, sandboxurl = 'http://127.0.0.1:8000/sandbox/?action=execute'))
EOF
            pytest $thetest
            # Test was collected and passed successfully
            if [ $? -eq 0 ]
            then
                pltp=$i
                rm $thetest
                echo "check des pl de "$i
                #Get all the pl in the current pltp removing the "@ " and apply the command on them 
                args=$(grep "^@" $i  | sed -e "s/^@ \/*//")
                echo $args
                checking $args
                echo "commit "$i
                let "nb_pltp+=1"
                git commit -m " newcheck commit " $i
            elif [ $? -eq 1 ]
            then
                echo "Tests were collected and run but some of the tests failed"
                rm $thetest
            fi
        else
            echo $i" n'est pas un fichier conforme, l'extension {"${fichier#*.}"} n'est pas valable" 
            rm $thetest
            continue
        fi

    done
}

    version=$(curl http://127.0.0.1:8000/sandbox/?action=version)

    if [ "$version" != "{\"version\":\"pysandbox-0.1\"}" ]
    then
        echo "Attention vous aviez oublié de lancer le serveur"
        python $rootdir/server/serverpl/manage.py runserver &
        while [ "$version" != "{\"version\":\"pysandbox-0.1\"}" ]
        do
            sleep 1
            version=$(curl http://127.0.0.1:8000/sandbox/?action=version)
        done
    fi

    checking $@
    
    if [ $nb_pl -gt 0 ]
    then
        echo "Ajout de "$nb_pltp" pltp et "$nb_pl" pl"
        git push
    fi
    
