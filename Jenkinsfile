pipeline {
  agent any
  stages {
    stage('Configurations') {
      steps {
        sh '''  
               pwd
               python -m venv toto
               source /srv/env/jenkinsenv/bin/activate
               pip3 install Django
               cd server/serverpl
               echo "Environnement configuration..."
               ./install_release.sh
           '''
      }
    }
    stage('Test') {
      steps {
        sh '''
              pwd
              cd server/serverpl
              source /srv/env/jenkinsenv/bin/activate
               echo "Running the tests..."
               python3 manage.py test
           '''
      }
    }
    stage('Clean') {
      steps {
        sh '''
           '''
      }
    }
  }
}
