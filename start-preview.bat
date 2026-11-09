@echo off
title Dar-Sherazade - local preview
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo.
  echo Node.js is not installed on this computer.
  echo Install the LTS version from https://nodejs.org , then double-click this file again.
  start "" https://nodejs.org/en/download
  pause
  exit /b 1
)

for /f "tokens=1 delims=v." %%a in ('node -v') do set NODEMAJOR=%%a
if %NODEMAJOR% LSS 22 (
  echo.
  echo Your Node.js version is too old ^(found:
  node -v
  echo ^). Please install the LTS version from https://nodejs.org , then try again.
  start "" https://nodejs.org/en/download
  pause
  exit /b 1
)

if not exist node_modules (
  echo Installing the site's dependencies - first time only, this can take a minute...
  call npm install
  if errorlevel 1 (
    echo.
    echo npm install failed - see the messages above.
    pause
    exit /b 1
  )
)

echo.
echo Starting the preview at http://localhost:4321
echo Keep this window open while you preview. Close it to stop the preview.
echo.
call npm run dev -- --open
pause
