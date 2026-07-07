# 🚀 MERN Employee Management System with Docker & CI/CD

A full-stack Employee Management System built using the MERN stack and deployed using Docker, Docker Compose, GitHub Actions, Docker Hub, and AWS EC2.

Every push to the `employee-prod` branch automatically builds Docker images, pushes them to Docker Hub, and deploys the latest version to an AWS EC2 instance.

---

## 🌐 Live Demo

**Frontend:** http://52.26.85.208

---

#  Features

- Employee Management (CRUD)
- Department Filter
- Search Employees
- Responsive UI
- REST API
- MongoDB Database
- Dockerized Frontend & Backend
- Automated CI/CD Deployment
- Reverse Proxy using Nginx

---

# Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### DevOps
- Docker
- Docker Compose
- GitHub Actions
- Docker Hub
- AWS EC2
- Nginx

---

#  Project Architecture

```text
                 Git Push
                    │
                    ▼
             GitHub Repository
                    │
                    ▼
            GitHub Actions CI/CD
                    │
     ┌──────────────┴──────────────┐
     ▼                             ▼
Build Frontend Image        Build Backend Image
     │                             │
     └──────────────┬──────────────┘
                    ▼
              Docker Hub
                    │
                    ▼
              AWS EC2 Server
                    │
            docker compose pull
                    │
            docker compose up
                    │
        ┌───────────┴───────────┐
        ▼                       ▼
   Frontend (Nginx)      Backend (Express)
                                  │
                                  ▼
                             MongoDB

---

#  Docker Setup

## Clone Repository

```bash
git clone https://github.com/deanalemao/mern-employees.git
cd mern-employees
```

---

## Start Containers

```bash
docker compose up -d
```

---

## Stop Containers

```bash
docker compose down
```

---


# CI/CD Workflow

Whenever code is pushed to the `employee-prod` branch:

1. GitHub Actions starts automatically.
2. Builds the Frontend Docker image.
3. Builds the Backend Docker image.
4. Pushes both images to Docker Hub.
5. Connects to AWS EC2 using SSH.
6. Pulls the latest images.
7. Restarts the application using Docker Compose.

---

# Docker Images

Frontend

```
deanalemao/mern-frontend-employee
```

Backend

```
deanalemao/mern-backend-employee
```

---

# ☁ Deployment

The application is deployed on:

- AWS EC2
- Docker Compose
- Nginx Reverse Proxy
- GitHub Actions
- Docker Hub

---

# 📈 CI/CD Pipeline

```
Developer
     │
git push employee-prod
     │
     ▼
GitHub Actions
     │
     ▼
Docker Build
     │
     ▼
Docker Hub
     │
     ▼
AWS EC2
     │
docker compose pull
     │
docker compose up -d
     │
     ▼
Live Application
```

---

#  What I Learned

During this project I gained practical experience with:

- Docker Image Creation
- Multi-stage Docker Builds
- Docker Compose
- Container Networking
- Nginx Reverse Proxy
- GitHub Actions
- CI/CD Pipelines
- Docker Hub
- AWS EC2 Deployment
- SSH Authentication
- Environment Variable Management
- Docker Image Optimization
- Debugging Production Deployment Issues

---

#  Future Improvements

- Kubernetes Deployment
- Terraform Infrastructure
- HTTPS with Let's Encrypt
- AWS ECS Deployment
- Monitoring using Prometheus & Grafana
- Centralized Logging

---

#  Author

**Dean Alemao**

LinkedIn:
(linkedin.com/in/deanalemao/)

GitHub:
https://github.com/deanalemao
