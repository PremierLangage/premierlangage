pipeline {
    agent {
        docker { image 'elaad/premierlangage:latest' }
    }
    stages {
        stage('Set environnement') {
            steps {
                sh 'pwd'
                sh 'ls'
                sh 'service rsyslog restart'
            }
        }
        stage('run tests') {
            steps {
                sh 'pwd'
                sh 'ls'
                sh 'cd server/serverpl'
                sh 'yes | ./install_local'
                sh 'python3 manage.py test'
            }
        }
        
    }
}
