pipeline {
    agent {
        docker { 
            image 'elaad/premierlangage:latest' 
            args '-u 0'
        }
    }
    stages {
        stage('Restart rsyslog') {
            steps {
                sh 'cd'
                sh 'pwd'
                sh 'service rsyslog restart'
            }
        }
        stage('Set Environnement') {
            steps {
                sh '''
                    python3 -m venv env
                    source env/bin/activate
                    cd server/serverpl
                    service rsyslog restart
                    ./install_local.sh
                '''
            }
        }
        stage('Run tests') {
            steps {
                sh '''
                    source env/bin/activate
                    cd server/serverpl
                    git config --global user.email "you@example.com"
                    git config --global user.name "Your Name"
                    python3 manage.py runserver &
                    python3 manage.py test
                '''
            }
        } 
    }
}

