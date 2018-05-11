pipeline {
  agent any
  stages {
    stage('Configurations') {
      steps {
        sh '''
               cd server/serverpl
               echo "Environnement configuration..."
               ./install_release.sh
           '''
      }
    }
    stage('Test') {
      steps {
        sh '''
               echo "Running the tests..."
               python3 manage.py test
           '''
      }
    }
  }
}
