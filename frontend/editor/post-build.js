const fs = require('fs-extra');
const process = require('child_process');

(async function() {
    const dist = './dist';
    const dest = '../../apps/editor/static/editor';
    await fs.removeSync(dest);
    await fs.copy(dist, dest);
    process.exec('chown -R `whoami` ' + dest);
})()
