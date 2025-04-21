#!/bin/bash

# Ensure script is being run from the project root
if [ ! -d "./client" ] || [ ! -d "./server" ]; then
  echo "This script must be run from the root of the project."
  exit 1
fi

# Ask user if they want to remove existing Git history
echo "Do you want to remove the existing Git history and initialize a new repository?"
read -p "Enter 'yes' to confirm or any other key to skip: " git_confirm

if [ "$git_confirm" = "yes" ]; then
  # Remove existing Git history and reinitialize
  echo "Removing existing Git history and initializing new repository..."
  rm -rf .git
  git init
  echo "Please add your remote repository URL:"
  read -p "Enter remote repository URL: " remote_url
  git remote add origin $remote_url
else
  echo "Skipping Git repository reset."
fi

# Install dependencies for the project
echo "Installing project dependencies..."
npm install

# Initialize Husky for pre-commit hooks
echo "Initializing Husky for pre-commit hooks..."
npx husky init

# Set up lint-staged for pre-commit hook
echo "Setting up lint-staged for pre-commit hook..."

# Modify the pre-commit file to run lint-staged
echo "Updating pre-commit hook to run lint-staged..."
echo "npx lint-staged" > .husky/pre-commit

# Create .env.development file
echo "Creating .env.development file..."
cat > .env.development <<EOL
ENV=development
PORT=5000
SERVER_URL=http://localhost:5000

DATABASE_URL="mongodb://<your-mongodb-username>:<your-mongodb-password>@mongo:27017/<database-name>?authSource=admin"

FRONTEND_URL="http://localhost:5173/"
VITE_SERVER_URL=http://localhost:5000

EMAIL_API_KEY=""
MONGO_INITDB_ROOT_USERNAME=<your-mongodb-username>
MONGO_INITDB_ROOT_PASSWORD=<your-mongodb-password>
EOL

echo "Please update the values in .env.development with your database credentials and API keys."

# Install server dependencies
echo "Installing server dependencies..."
cd server
npm install

# Go back to the root and install client dependencies
cd ..
echo "Installing client dependencies..."
cd client
npm install

echo "Setup complete! Please ensure you've updated .env.development with your credentials."