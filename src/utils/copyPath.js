const fs = require('fs-extra');

module.exports = path =>
    fs.copySync(`${__dirname}/../../${path}`, `${process.cwd()}/${path}`);
