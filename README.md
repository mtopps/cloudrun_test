# Docker build

### backend

```bash
cd backend
docker build -t backend .
docker run --network app-network --name backend -d -p 5000:5000 backend
```

### frontend

```bash
cd frontend
docker build -t frontend .
docker run --network app-network --name frontend -d -p 3000:3000 frontend
```

# Cloudrun

1. Authenticate to your Google Cloud account:

```bash
gcloud auth login
```

2. Configure Docker to use `gcloud` as a credential helper:

```bash
gcloud auth configure-docker
```

3. Tag your Docker images with the path to your Container Registry:

```bash
docker tag backend gcr.io/PROJECT_ID/backend
docker tag frontend gcr.io/PROJECT_ID/frontend
```

Replace `PROJECT_ID` with your Google Cloud project ID.

4. Push the Docker images to the Container Registry:

```bash
docker push gcr.io/PROJECT_ID/backend
docker push gcr.io/PROJECT_ID/frontend
```

5. Deploy the images to Cloud Run:

```bash
gcloud run deploy backend --image gcr.io/PROJECT_ID/backend --platform managed
gcloud run deploy frontend --image gcr.io/PROJECT_ID/frontend --platform managed
```

This will create two Cloud Run services, one for the backend and one for the frontend. After running these commands, you will get URLs for your services. You can use these URLs to access your applications.

Please note that you need to have the Google Cloud SDK installed on your machine to run these commands. If you don't have it installed, you can download it from the [Google Cloud SDK webpage](https://cloud.google.com/sdk/docs/install).