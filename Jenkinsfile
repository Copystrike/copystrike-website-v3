def version = "1.0.${env.BUILD_NUMBER}"
pipeline {
    agent any
    
    environment {
        dockerImage = ''
        registry = "docker.copystrike.dev/cpsk-website:${version}"
        registryCredential = "dockerhub"
    }

    stages {
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