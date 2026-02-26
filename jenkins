pipeline {
    agent any

    environment {
        SERVER_IP = "YOUR_SERVER_IP"
        SERVER_USER = "ubuntu"
        DEPLOY_PATH = "/var/www/html"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                url: 'https://github.com/Vitthal38/jenkins.git'
            }
        }

        stage('Deploy to Ubuntu Server') {
            steps {
                sshagent(credentials: ['ubuntu-server-ssh-key']) {
                    sh """
                    ssh -o StrictHostKeyChecking=no ${SERVER_USER}@${SERVER_IP} '
                        sudo rm -rf ${DEPLOY_PATH}/*
                    '

                    scp -o StrictHostKeyChecking=no -r * ${SERVER_USER}@${SERVER_IP}:${DEPLOY_PATH}
                    """
                }
            }
        }
   
