@echo off
cd /d "%~dp0"
echo Checking for Node.js...
node -v >nul 2>&1
if errorlevel 1 (
    echo.
    echo Node.js is not installed or not in your PATH.
    echo.
    echo To fix:
    echo   1. Download and install Node.js from https://nodejs.org/ ^(LTS^)
    echo   2. Restart this terminal after installing
    echo   3. Run this script again
    echo.
    pause
    exit /b 1
)
npm -v >nul 2>&1
if errorlevel 1 (
    echo npm not found. Please reinstall Node.js from https://nodejs.org/
    pause
    exit /b 1
)
echo.
echo Installing dependencies...
call npm install
if errorlevel 1 exit /b 1
echo.
echo Starting development server at http://localhost:3000
echo Press Ctrl+C to stop
echo.
call npm run dev
