pipeline {
    agent any

    environment {
        DEPLOY_PATH = "/var/www/html"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Vitthal38/jenkins.git'
            }
        }

        stage('Deploy Locally') {
            steps {
                sh '''
                echo "Cleaning old files..."
                rm -rf /var/www/html/*

                echo "Copying new files..."
                 cp -r * /var/www/html/

                echo "Setting ownership..."
                chown -R www-data:www-data /var/www/html

                echo "Setting permissions..."
                chmod -R 755 /var/www/html
                '''
            }
        }
    }

    post {
        success {
            echo "Deployment Successful"
        }
        failure {
            echo "Deployment Failed"
        }
    }
