@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo [1/3] Git status...
git status

echo.
echo [2/3] Committing all changes...
git add .
git commit -m "BELLO 홈페이지: 다크테마 고정, 성공사례/문의폼/LiveToast 등 전 기능 반영" 2>nul || git commit --allow-empty -m "BELLO 홈페이지 업데이트"
if errorlevel 1 (
  echo Commit failed or nothing to commit. Continuing...
)

echo.
echo [3/3] Pushing to GitHub (yhs1780-arch/bello)...
git push -u origin main

if errorlevel 1 (
  echo.
  echo Push failed. If you see "Authentication failed" or "Permission denied":
  echo - GitHub login: Run "git push -u origin main" again and sign in when the browser opens.
  echo - Or use Personal Access Token: GitHub ^> Settings ^> Developer settings ^> Personal access tokens
  pause
) else (
  echo.
  echo Done. Netlify will auto-deploy in 1-2 minutes. Check https://bellomarket.netlify.app/
  pause
)
