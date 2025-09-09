#!/usr/bin/env node
const { execSync } = require('child_process');

try {
  // 设置npm registry
  execSync('npm config set registry https://registry.npmjs.org/', { stdio: 'inherit' });
  
  // 安装依赖
  execSync('npm install --legacy-peer-deps', { stdio: 'inherit' });
  
  console.log('Dependencies installed successfully!');
} catch (error) {
  console.error('Installation failed:', error.message);
  process.exit(1);
}