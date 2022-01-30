def version = "1.0.${env.BUILD_NUMBER}"
pipeline {
    agent any
    
    options {
        skipDefaultCheckout(true) // To make cleaningWS work
    }

    environment {
        dockerImage = ''
        registry = "docker.copystrike.dev/cpsk-website:${version}"
        registryCredential = "dockerhub"
    }

    stages {
        stage('CleanWs') {
            steps {
                echo "Cleaning workspace..."
                cleanWs()
            }
        }
        stage('build') {
            steps {
                echo "Builing version ${version}"
                script {
                    dockerImage = docker.build registry
                }
            }
        }
        
        stage('deploy') {
            steps {
                echo "Pushing to private registry docker.copystrike.dev..."
                script {
                    docker.withRegistry('https://docker.copystrike.dev', "${env.registryCredential}") {
                        dockerImage.push("${version}")
                        dockerImage.push("latest")
                    }
                }
            }
        }
    }
}