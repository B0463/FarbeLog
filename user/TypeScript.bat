cd %~dp0
cd ..
rd /s /q .git
move TypeScript/dist/FarbeLog.js FarbeLog.js
rd /s /q JavaScript
rd /s /q TypeScript
del /f /s /q .gitignore
del /f /s /q package-lock.json
del /f /s /q package.json
del /f /s /q README.md
del /f /s /q tsconfig.json