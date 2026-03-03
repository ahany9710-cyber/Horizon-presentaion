# Start Next.js Development Server
# Requires Node.js: https://nodejs.org/

$ErrorActionPreference = "Stop"

Write-Host "Checking for Node.js..." -ForegroundColor Cyan
try {
    $nodeVersion = node -v 2>$null
    $npmVersion = npm -v 2>$null
    if ($nodeVersion -and $npmVersion) {
        Write-Host "Node: $nodeVersion | npm: $npmVersion" -ForegroundColor Green
    } else {
        throw "Not found"
    }
} catch {
    Write-Host ""
    Write-Host "Node.js is not installed or not in your PATH." -ForegroundColor Red
    Write-Host ""
    Write-Host "To fix:" -ForegroundColor Yellow
    Write-Host "  1. Download and install Node.js from https://nodejs.org/ (LTS)" -ForegroundColor White
    Write-Host "  2. Restart this terminal (or Cursor) after installing" -ForegroundColor White
    Write-Host "  3. Run this script again" -ForegroundColor White
    Write-Host ""
    exit 1
}

Set-Location $PSScriptRoot

Write-Host ""
Write-Host "Installing dependencies..." -ForegroundColor Cyan
npm install
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host ""
Write-Host "Starting development server at http://localhost:3000" -ForegroundColor Green
Write-Host "Press Ctrl+C to stop" -ForegroundColor Gray
Write-Host ""
npm run dev
