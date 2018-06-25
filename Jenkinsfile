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
                    cd server/serverpl
                    python3 -m venv env
                    source env/bin/activate
                    yes | ./install_local.sh
                '''
            }
        }
        stage('Run tests') {
            parallel {
                stage('Run Server') {
                    steps {
                        sh '''
                            cd server/serverpl
                            source env/bin/activate
                            ./run
                        '''
                    }
                }
                stage('Run Djangos test') {
                    steps {
                        sh '''
                            cd server/serverpl
                            source env/bin/activate
                            python3 manage.py test
                        '''
                    }
                }
            }
        } 
    }
}

