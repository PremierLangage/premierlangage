pipeline {
  agent any
  stages {
    stage('Configurations') {
      steps {
        sh '''  
               pwd
               python3 -m venv /srv/env/jenkinsenv2
               source /srv/env/jenkinsenv2/bin/activate
               pip3 install Django
               cd server/serverpl
               echo "Environnement configuration..."
               ./install_local.sh
           '''
      }
    }
    stage('Test') {
      steps {
        sh '''
              pwd
              cd server/serverpl
              source /srv/env/jenkinsenv2/bin/activate
               echo "Running the tests..."
               python3 manage.py test
           '''
      }
    }
    stage('Clean') {
      steps {
        sh '''
            rm -rf /srv/env/jenkinsenv2
           '''
      }
    }
  }
}
