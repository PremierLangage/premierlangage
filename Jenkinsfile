pipeline {
  agent any
  stages {
    stage('Environment\'s configuration ') {
      steps {
        sh '''
               python3 -m venv /var/lib/jenkins/workspace/env/jenkinsenv
               source  /var/lib/jenkins/workspace/env/jenkinsenv/bin/activate
               pip3 install Django
               cd server/serverpl
               RANDOM_KEY=$(python3 -c 'from django.utils.crypto import get_random_string;chars = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(-_=+)";SECRET_KEY = get_random_string(50, chars);print(SECRET_KEY)')
               export SECRET_KEY=$RANDOM_KEY
               echo "---- Environnement configuration... ----"
               ./install_local.sh
           '''
      }
    }
    stage('Running tests') {
      steps {
        sh '''
              cd server/serverpl
              source  /var/lib/jenkins/workspace/env/jenkinsenv/bin/activate
              echo "---- Running tests... ----"
              python3 manage.py test
           '''
      }
    }
    stage('Clean envrionnement') {
      steps {
        sh '''
            rm -rf /var/lib/jenkins/workspace/env/jenkinsenv
           '''
      }
    }
  }
}
