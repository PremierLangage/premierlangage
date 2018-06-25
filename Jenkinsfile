pipeline {
    agent {
        docker { image 'elaad/premierlangage:latest' }
    }
    stages {
        stage('Set environnement') {
            steps {
                sh 'service rsyslog restart'
            }
        }
        stage('run tests') {
            steps {
                sh '''
                    pwd
                    ls
                    cd server/serverpl
                    pwd
                    python3 -m venv env
                    source env/bin/activate
                    sudo chmod +x install_local.sh
                    sudo yes | sudo ./install_local.sh
                    python3 manage.py test
                '''
            }
        }
        
    }
}

