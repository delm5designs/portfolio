@echo off
REM Double-click this file to preview the portfolio locally.
REM The site CANNOT be opened by double-clicking index.html: its runtime loads
REM the nav and footer with fetch(), which browsers block on file:// URLs.

cd /d "%~dp0"
set PORT=8000

where python >nul 2>nul
if %ERRORLEVEL%==0 (
  start "" "http://localhost:%PORT%/"
  echo.
  echo   Portfolio running at http://localhost:%PORT%/
  echo   Leave this window open while you browse. Press Ctrl+C to stop.
  echo.
  python -m http.server %PORT%
  goto :eof
)

where npx >nul 2>nul
if %ERRORLEVEL%==0 (
  start "" "http://localhost:%PORT%/"
  npx --yes serve -l %PORT% .
  goto :eof
)

echo Could not find Python or Node on this machine.
echo Install Python from https://www.python.org/downloads/ and run this again.
pause
