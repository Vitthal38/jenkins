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
                sudo rm -rf /var/www/html/*

                echo "Copying new files..."
                sudo cp -r * /var/www/html/

                echo "Setting ownership..."
                sudo chown -R www-data:www-data /var/www/html

                echo "Setting permissions..."
                sudo chmod -R 755 /var/www/html
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
