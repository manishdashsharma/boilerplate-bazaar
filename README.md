# 🚀 Node React Mongo Toolkit

A streamlined development toolkit for quickly setting up and managing Node.js, React, and MongoDB projects with Docker integration.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Docker](https://img.shields.io/badge/docker-ready-brightgreen.svg)
![Node](https://img.shields.io/badge/node-18.x-green.svg)
![React](https://img.shields.io/badge/react-18.x-blue.svg)
![MongoDB](https://img.shields.io/badge/mongodb-6.x-green.svg)


## 🚀 Getting Started

### 1️⃣ Make Scripts Executable

```bash
chmod +x ./setup.sh ./docker-manager.sh
```

### 2️⃣ Run the Setup Script

```bash
./setup.sh
```

The setup script will:
- Ask if you want to remove existing Git history and initialize a new repository
- If yes, prompt for your GitHub repository URL
- Install project dependencies
- Set up Husky pre-commit hooks
- Create an environment configuration file

### 3️⃣ Configure Environment Variables

Edit the generated `.env.development` file with your MongoDB credentials and other settings:

```
ENV=development
PORT=5000
SERVER_URL=http://localhost:5000

DATABASE_URL="mongodb://<your-mongodb-username>:<your-mongodb-password>@mongo:27017/<database-name>?authSource=admin"

FRONTEND_URL="http://localhost:5173/"
VITE_SERVER_URL=http://localhost:5000

EMAIL_API_KEY=""
MONGO_INITDB_ROOT_USERNAME=<your-mongodb-username>
MONGO_INITDB_ROOT_PASSWORD=<your-mongodb-password>
```

### 4️⃣ Start Your Development Environment

Ensure Docker is running, then:

```bash
./docker-manager.sh
```

Follow the interactive prompts to select your environment and which services to start.

## 🎮 Using the Docker Manager

The `docker-manager.sh` script provides an interactive menu to manage your Docker environment:

### Environment Options:
1. **Development** - For local development with hot-reloading
2. **Production** - For production-ready containers
3. **Complete Teardown** - Removes all containers, images, volumes for the project
4. **Exit**

### Service Options:
1. **All (Clean start)** - Rebuilds and recreates all containers
2. **Server** - Starts only the backend server
3. **Client** - Starts only the React frontend
4. **Server & Client** - Starts both frontend and backend
5. **Back** - Return to environment selection
6. **Exit**

## 💻 Development Workflow

1. Make code changes in the `client/` or `server/` directories
2. The development environment includes hot-reloading, so changes will be reflected immediately
3. Use the docker-manager script to restart specific services if needed

### Committing and Pushing to Your Repository

#### Pushing to Your Repository

After making changes:

1. Stage your changes:
   ```bash
   git add .
   ```

2. Commit with a proper commit message following the commitlint rules:
   ```bash
   git commit -m "feat: Add new user authentication feature"
   ```

3. Push to your repository:
   ```bash
   git push origin main
   ```

The pre-commit hooks (set up with Husky) will ensure your code passes linting before each commit, and commitlint will verify your commit messages follow the specified format.

This toolkit includes commitlint configuration to enforce consistent commit messages:

- "feat":     New feature  
- "fix":      Bug fix  
- "docs":     Documentation change  
- "style":    Changes that do not affect the meaning of the code (e.g., formatting)  
- "refactor": Code change that neither fixes a bug nor adds a feature  
- "perf":     Performance improvement  
- "test":     Adding or correcting tests  
- "build":    Changes to the build system or external dependencies  
- "ci":       Changes to CI configuration files and scripts  
- "chore":    Other changes that don’t modify src or test files  
- "revert":   Revert to a previous commit  


## 🔧 Customization

### Project Name

You can customize the project name by passing it as an argument to the setup script:

```bash
./setup.sh your-project-name
```

This affects Docker container names, network names, and volume names.

### Docker Configuration

Edit the Docker Compose files to adjust container configurations:
- `docker-compose.dev.yml` for development
- `docker-compose.prod.yml` for production

### Commit Linting

The toolkit includes a default commit linting configuration to enforce consistent commit messages. You can modify the rules in `commitlint.config.js` to match your team's preferred commit message style.

## 🐛 Troubleshooting

### Common Issues

| Problem | Solution |
|---------|----------|
| Docker containers won't start | Ensure Docker is running and check logs with `docker logs <container-name>` |
| MongoDB connection fails | Verify your credentials in the `.env.development` file |
| Missing configuration files | Run `./setup.sh` again to recreate configuration files |
| Port conflicts | Edit the Docker Compose files to change port mappings |

### Reset Everything

To completely reset your development environment:

```bash
./docker-manager.sh
# Select option 3 for Complete Teardown
```

# 🚀 Production Setup Guide

This guide explains how to configure and deploy your Node React Mongo application for production.

## Creating Production Environment Configuration

1. Create a `.env.production` file in the root directory with appropriate values:

```
ENV=production
PORT=5000
SERVER_URL=https://yourdomain.com

DATABASE_URL="mongodb://<your-mongodb-username>:<your-mongodb-password>@mongo:27017/<database-name>?authSource=admin"

FRONTEND_URL="https://yourdomain.com"
VITE_SERVER_URL=https://yourdomain.com

EMAIL_API_KEY="your-email-api-key"
MONGO_INITDB_ROOT_USERNAME=<your-mongodb-username>
MONGO_INITDB_ROOT_PASSWORD=<your-mongodb-password>
```

2. Update the frontend environment configuration:
   - In the `client` directory, ensure the `.env` file has:
   ```
   VITE_SERVER_URL=https://yourdomain.com
   ```

## Configuring Nginx

The application uses Nginx as a reverse proxy for both the client and server in production.

### Setting Up Domain and SSL

1. Edit the `nginx/nginx.conf` file:

```nginx
server {
    listen       80;
    server_name  yourdomain.com www.yourdomain.com;
    
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name  yourdomain.com www.yourdomain.com;

    # For production with Let's Encrypt certificates
    ssl_certificate      /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key  /etc/letsencrypt/live/yourdomain.com/privkey.pem;
    
    # Comment out self-signed certificates when using Let's Encrypt
    # ssl_certificate      /etc/nginx/certificates/fullchain.pem;
    # ssl_certificate_key  /etc/nginx/certificates/privkey.pem;

    # Additional SSL configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;
    ssl_ciphers 'ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384';
    ssl_session_timeout 1d;
    ssl_session_cache shared:SSL:50m;
    ssl_stapling on;
    ssl_stapling_verify on;

    # Client application location
    location / {
        proxy_pass http://client:5173;  # Vite dev server
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    # API endpoints location
    location /api {
        proxy_pass http://server:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

2. Replace `yourdomain.com` with your actual domain name throughout the file.

### Docker Compose Configuration

Update the `docker-compose.prod.yml` file to mount your SSL certificates correctly:

```yaml
nginx:
  build:
    context: ./nginx
    dockerfile: Dockerfile
  container_name: nginx
  ports:
    - '80:80'
    - '443:443'
  volumes:
    - ./nginx:/usr/src/app
    - ./nginx/nginx.conf:/etc/nginx/conf.d/default.conf:ro
    
    # For production with Let's Encrypt certificates
    - /etc/letsencrypt/live/yourdomain.com/fullchain.pem:/etc/letsencrypt/live/yourdomain.com/fullchain.pem:ro
    - /etc/letsencrypt/live/yourdomain.com/privkey.pem:/etc/letsencrypt/live/yourdomain.com/privkey.pem:ro
    
    # For development or testing with self-signed certificates
    # - ./nginx/certificates:/etc/nginx/certificates:rw 
  restart: always
  networks:
    - queue-net
  depends_on:
    - server
    - client
```

3. Replace `yourdomain.com` with your actual domain name in the certificate paths.


## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Made with ❤️

If you find this toolkit useful, please consider giving it a star ⭐ on GitHub!
