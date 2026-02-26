pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Vitthal38/jenkins.git'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                echo "Deploying application..."

                rm -rf /var/www/html/*
                cp -r * /var/www/html/
                '''
            }
        }

    }

}
