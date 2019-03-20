node('test-agent') {
    docker.image('elaad/premierlangage:latest').inside {
        stage 'Build'
         sh '''
        python3 -m venv env
        source env/bin/activate
        cd server/serverpl
        service rsyslog restart
        ./install_local.sh
        git config --global user.email "you@example.com"
        git config --global user.name "Your Name"
        python3 manage.py runserver &
        python3 manage.py test
        '''
    }
}
