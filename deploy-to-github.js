/**
 * 프로젝트 폴더에서 실행: node deploy-to-github.js
 * GitHub push 후 Netlify 자동 배포됨 (https://bellomarket.netlify.app/)
 */
const { spawnSync } = require('child_process');
const path = require('path');

const root = __dirname;

function run(cmd, args = [], opts = {}) {
  const r = spawnSync(cmd, args, { cwd: root, stdio: 'inherit', shell: false, ...opts });
  return r.status;
}

console.log('[1/3] Git status...\n');
run('git', ['status']);

console.log('\n[2/3] Commit...\n');
run('git', ['add', '.']);
const commitMsg = 'BELLO homepage: dark theme, cases, contact form, LiveToast';
const commitStatus = run('git', ['commit', '-m', commitMsg]);
if (commitStatus !== 0) {
  run('git', ['commit', '--allow-empty', '-m', commitMsg]);
}

console.log('\n[2b] Fetch and pull from GitHub...\n');
run('git', ['fetch', 'origin']);
run('git', ['pull', 'origin', 'main', '--allow-unrelated-histories', '--no-edit'], { stdio: 'inherit' });

console.log('\n[3/3] Push to GitHub...\n');
const pushStatus = run('git', ['push', '-u', 'origin', 'main']);

if (pushStatus !== 0) {
  console.error('\nPush 실패. GitHub 로그인이 필요할 수 있습니다. Cursor 터미널에서 직접 실행해 보세요:');
  console.error('  git push -u origin main');
  process.exit(1);
}

console.log('\n완료. 1~2분 후 https://bellomarket.netlify.app/ 에 반영됩니다.');
