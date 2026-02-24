@echo off
chcp 65001 >nul
echo 실행마케팅 홈페이지를 시작합니다...
echo.

:: 한글 경로 때문에 Internal Server Error가 나는 경우, 영문 드라이브 경로(M:)로 실행합니다.
set "DRIVE=M:"
if exist %DRIVE%\ (
  echo 기존 %DRIVE% 매핑 제거 중...
  subst %DRIVE% /d 2>nul
)
echo 프로젝트 폴더를 %DRIVE% 로 연결합니다. (한글 경로 오류 방지)
subst %DRIVE% "%cd%"
if errorlevel 1 (
  echo subst 실패. 아래 방법으로 실행해 보세요:
  echo 1. 프로젝트 폴더 전체를 영문 경로로 복사 (예: C:\marketing-site)
  echo 2. 그 폴더에서 npm run dev 실행
  pause
  exit /b 1
)

cd /d %DRIVE%\
if exist .next (
  echo .next 폴더 정리 중...
  rmdir /s /q .next
)
echo.
echo 개발 서버 실행 중... 브라우저에서 http://localhost:3000 을 열어 보세요.
echo 종료하려면 이 창에서 Ctrl+C 를 누른 뒤 아무 키나 누르세요.
echo.
call npm run dev

:: 종료 시 드라이브 매핑 해제
subst %DRIVE% /d 2>nul
pause
