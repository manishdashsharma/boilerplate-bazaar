# Use a specific node version for stability
FROM node:20 AS build

# Switch to root to install system dependencies
USER root

# Install OpenSSL if required (optional, depending on your use case)
RUN apt-get update -y && \
    apt-get install -y openssl && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install production dependencies
RUN npm ci --only=production

# Copy the rest of the application code and Prisma schema
COPY src/ ./src/
COPY prisma/ ./prisma/

# Generate Prisma Client
RUN npx prisma generate

# Switch to node user for security
USER node

# Expose the application port
EXPOSE 5000

# Set environment variables
ENV NODE_ENV=production

# Start the application
CMD ["node", "src/server.js"]