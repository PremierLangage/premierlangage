pipeline {
    agent any
    stages {
        stage('Configurations') {
            steps {
               sh '''
                  echo "Environnement configuration..."
                  server/serverpl/./install_release.sh
               '''
            }
        }
        stage('Test') {
            steps {
               sh '''
               echo "Running the tests..."
               python3 server/serverpl/manage.py test
               '''
            }
        }
    }
}
