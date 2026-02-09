#!/bin/bash

echo "🔧 Fixing npm permissions issue..."
echo ""
echo "This script will fix the npm cache permissions that are preventing the app from running."
echo ""

# Fix npm cache permissions
echo "Running: sudo chown -R $(id -u):$(id -g) \"$HOME/.npm\""
sudo chown -R $(id -u):$(id -g) "$HOME/.npm"

if [ $? -eq 0 ]; then
  echo "✅ Permissions fixed!"
  echo ""
  echo "Now installing dependencies..."
  npm install
  
  if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Setup complete! Starting development server..."
    echo ""
    npm run dev
  else
    echo "❌ npm install failed. Please check the errors above."
  fi
else
  echo "❌ Permission fix failed. You may need to enter your password."
fi
