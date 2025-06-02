#!/usr/bin/env node

/**
 * Custom Strapi build script that handles React dependencies automatically
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting custom Strapi build...');

// Set environment variables
process.env.CI = 'true';
process.env.STRAPI_DISABLE_UPDATE_NOTIFICATION = 'true';
process.env.NODE_ENV = 'production';

try {
  // Check if React dependencies are installed
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  const requiredDeps = [
    'react',
    'react-dom', 
    'react-router-dom',
    'styled-components'
  ];
  
  const missingDeps = requiredDeps.filter(dep => 
    !packageJson.dependencies[dep] && !packageJson.devDependencies[dep]
  );
  
  if (missingDeps.length > 0) {
    console.log('📦 Installing missing React dependencies...');
    execSync(`npm install ${missingDeps.map(dep => `${dep}@latest`).join(' ')} --save-dev`, {
      stdio: 'inherit'
    });
  }
  
  // Run Strapi build with automatic yes response
  console.log('🔨 Building Strapi admin panel...');
  execSync('echo "y" | npx strapi build --no-optimization', {
    stdio: 'inherit',
    env: {
      ...process.env,
      CI: 'true',
      STRAPI_DISABLE_UPDATE_NOTIFICATION: 'true'
    }
  });
  
  console.log('✅ Strapi build completed successfully!');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
