pipeline {
  agent any
  stages {
    stage('Configurations') {
      steps {
        sh '''  
               python3 -m venv /var/lib/jenkins/workspace/env/jenkinsenv
               source  /var/lib/jenkins/workspace/env/jenkinsenv/bin/activate
               pip3 install Django
               cd server/serverpfl
               echo "---- Environnement configuration... ----"
               ./install_local.sh
           '''
      }
    }
    stage('Test') {
      steps {
        sh '''
              cd server/serverpl
              source  /var/lib/jenkins/workspace/env/jenkinsenv/bin/activate
              echo "---- Running the tests... ----"
              python3 manage.py test
           '''
      }
    }
    stage('Clean') {
      steps {
        sh '''
            rm -rf /var/lib/jenkins/workspace/env/jenkinsenv
           '''
      }
    }
  }
}
