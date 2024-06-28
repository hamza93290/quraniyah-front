const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

getApplicationVersion();

function getApplicationVersion() {
    const version = getPackageJson().version;
    const filePath = path.join(__dirname + '/../src/environments/build-info.ts');
    var src = `export const version = '${version}';`;

    fs.writeFile(filePath, src, { flat: 'w' }, function (error) {
        if (error) {
            console.error(chalk.red('[ERROR] ' + error));
            process.exit(1);
        }
    })
}

function getPackageJson() {
    return require('../package.json');
}