// Vercel CLI 한글 사용자명(HTTP 헤더 오류) 우회 스크립트
// 사용: node vercel-login-fix.js login   또는   node vercel-login-fix.js
const { spawnSync } = require("child_process");

const env = { ...process.env };
env.USERNAME = "User";
env.COMPUTERNAME = "PC";
env.LOGNAME = "User";
env.USER = "User";
env.VERCEL_TELEMETRY_DISABLED = "1";
env.DO_NOT_TRACK = "1";
// Node가 os.userInfo() 대신 이 값들을 쓰도록 할 수 없으므로,
// 자식 프로세스에 전달해 Vercel이 받는 env를 ASCII로 고정
const args = process.argv.slice(2);
const cmd = args[0] === "login" ? ["login"] : args.length ? args : ["login"];

const result = spawnSync("vercel", cmd, {
  stdio: "inherit",
  env,
  shell: true,
});
process.exit(result.status || 0);
