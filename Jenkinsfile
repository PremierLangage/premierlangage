pipeline {
     agent {
        docker { 
            image 'elaad/premierlangage:latest' 
        }
    }
    stages {
         agent {
        docker { 
            image 'elaad/premierlangage:latest' 
        }
    }
        stage('Set Environnement') {
            steps {
                sh '''
                    pwd
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
                    pwd
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

