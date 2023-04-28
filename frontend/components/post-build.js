const fs = require('fs-extra');
const process = require('child_process');
(async function() {
    const dist = './dist';
    const dest = '../../apps/components/static/components';
    await fs.remove(dest);
    await fs.copy(dist, dest);
    process.exec('chown -R `whoami` ' + dest);
})().catch(error => {
    console.log(error);
});
