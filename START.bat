@echo off
cd /d "%~dp0"
echo Starting Pitch Deck Server...
echo.
py -3 --version >nul 2>&1
if errorlevel 1 (
    echo Python not found. Checking Node.js...
    node -v >nul 2>&1
    if errorlevel 1 (
        echo.
        echo Neither Python nor Node.js found.
        echo Install Python from https://www.python.org/ OR Node.js from https://nodejs.org/
        pause
        exit /b 1
    )
    echo Using Node.js...
    call npm install
    start http://localhost:3000
    call npm run dev
) else (
    echo Using Python - Opening http://localhost:3000
    py -3 start-server.py
)
