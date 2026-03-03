@echo off
title Pitch Deck Server
cd /d "%~dp0"

echo.
echo ============================================
echo   Views Investments X Saada - Pitch Deck
echo ============================================
echo.

REM Try Python first (no Node.js needed)
py -3 --version >nul 2>&1
if %errorlevel% equ 0 (
    echo Starting server with Python...
    echo Open http://localhost:3000 in your browser
    echo Press Ctrl+C to stop
    echo.
    py -3 start-server.py
    goto :done
)

python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo Starting server with Python...
    python start-server.py
    goto :done
)

REM Fallback to Node.js
node -v >nul 2>&1
if %errorlevel% equ 0 (
    echo Starting with Node.js...
    call npm install 2>nul
    start http://localhost:3000
    call npm run dev
    goto :done
)

echo ERROR: Neither Python nor Node.js found.
echo.
echo Install one of:
echo   - Python: https://www.python.org/downloads/
echo   - Node.js: https://nodejs.org/
echo.
echo Then run this file again.
pause
:done
