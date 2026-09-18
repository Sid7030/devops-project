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
                        credentialsId:   'dockerhub-credentials',
                        usernameVariable: 'DOCKER_USERNAME',
                        passwordVariable: 'DOCKER_PASSWORD'
                    )
                ]) {
                 bat 'echo %DOCKER_PASSWORD% | docker login docker.io -u "%DOCKER_USERNAME%" --password-stdin'
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