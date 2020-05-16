pipeline{
    agent any
    stages{
        stage('Lint HTML') {
              steps {
                  sh 'tidy -q -e *.html'
              }
        }
        
        stage('Upload to AWS') {
              steps {
                  withAWS(region:'us-west-2',credentials:'aws-static') {
                  sh 'echo "Uploading content with AWS creds"'
                      s3Upload(pathStyleAccessEnabled: true, payloadSigningEnabled: true, file:'index.html', bucket:'jenkins-aws-static-website')
                  }
              }
        }
    }
}