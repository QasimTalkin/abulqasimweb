# 🎮 Gamified Portfolio - Quick Start Guide

## ⚠️ Current Issue: NPM Permission Error

Your system has an npm cache permission issue that's preventing the app from running. This is a common issue and easy to fix!

## 🔧 Quick Fix (Recommended)

Run this single command in your terminal:

```bash
./fix-and-run.sh
```

This script will:
1. Fix the npm cache permissions (will ask for your password)
2. Install all dependencies
3. Start the development server automatically

## 🔧 Manual Fix (Alternative)

If you prefer to run commands manually:

### Step 1: Fix NPM Permissions
```bash
sudo chown -R $(id -u):$(id -g) "$HOME/.npm"
```
*(You'll need to enter your password)*

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```

### Step 4: Open in Browser
Open [http://localhost:3000](http://localhost:3000)

## 📋 What Was Built

Your gamified portfolio includes:

✅ **Character Select Hero** - 6 career roles with RPG stats  
✅ **Stats Dashboard** - XP bars, career metrics (no RateMyProfessors)  
✅ **12 Achievement Badges** - Career milestones  
✅ **GitHub Integration** - Repos as game levels  
✅ **Journey Timeline** - 9 milestones with lessons learned  
✅ **Boss Battle Contact** - Epic contact form  

## 🚨 If You Still Get Errors

If you see TypeScript or build errors after fixing permissions, please share the specific error messages and I'll help fix them immediately.

## 📞 Need Help?

The most common issues are:
1. **NPM permissions** - Fixed by the script above
2. **Port 3000 in use** - Kill the process or use a different port
3. **Missing dependencies** - Run `npm install` again

Let me know what errors you're seeing and I'll help resolve them!
