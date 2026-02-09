#!/bin/bash

# Fix npm permissions and install dependencies
echo "🎮 Setting up your gamified portfolio..."

# Check if we need to fix npm permissions
if [ ! -w "$HOME/.npm" ]; then
  echo "⚠️  NPM permission issue detected."
  echo "Please run the following command in your terminal:"
  echo ""
  echo "  sudo chown -R $(id -u):$(id -g) \"$HOME/.npm\""
  echo ""
  echo "Then run this script again."
  exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Check if installation was successful
if [ $? -eq 0 ]; then
  echo "✅ Dependencies installed successfully!"
  echo ""
  echo "🚀 To start the development server, run:"
  echo "  npm run dev"
  echo ""
  echo "Then open http://localhost:3000 in your browser"
else
  echo "❌ Installation failed. Please check the error messages above."
  exit 1
fi
