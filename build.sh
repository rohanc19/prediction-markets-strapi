#!/bin/bash

# Non-interactive Strapi build script
echo "🚀 Starting non-interactive Strapi build..."

# Set environment variables for non-interactive mode
export CI=true
export STRAPI_DISABLE_UPDATE_NOTIFICATION=true
export NODE_ENV=production

# Install dependencies if not already installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install --legacy-peer-deps
fi

# Build Strapi with automatic "yes" response
echo "🔨 Building Strapi admin panel..."
echo "y" | npx strapi build --no-optimization

echo "✅ Build completed successfully!"
