pipeline {
    agent any

    environment {
        DOCKER_HOST = 'npipe:////./pipe/dockerDesktopLinuxEngine'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t sid7030/devops-node-app:latest .'
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId:  'fc0dfc53-030f-402c-b2d4-56906673fb0e',
                        usernameVariable: 'DOCKER_USERNAME',
                        passwordVariable: 'DOCKER_PASSWORD'
                    )
                ]) {
                    bat 'docker login -u "%DOCKER_USERNAME%" -p "%DOCKER_PASSWORD%"'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                bat 'docker push sid7030/devops-node-app:latest'
            }
        }
    }
}