const path = require('path');

const _root = path.resolve(__dirname, '..');

exports.root = function root(...args) { 
    return path.join(...[_root, ...args]);
}
