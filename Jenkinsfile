pipeline {
    agent {
        docker { 
            image 'elaad/premierlangage:latest' 
        }
    }
    stages {
        stage('Restart rsyslog') {
            steps {
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
            parallel {
                stage('Run Server') {
                    steps {
                        sh '''
                            source env/bin/activate
                            cd server/serverpl
                            ./run
                        '''
                    }
                }
                stage('Run Djangos tests') {
                    steps {
                        sh '''
                            source env/bin/activate
                            cd server/serverpl
                            python3 manage.py test
                        '''
                    }
                }
            }
        } 
    }
}

