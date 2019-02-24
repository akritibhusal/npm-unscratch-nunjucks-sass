#!/usr/bin/env node

var shell = require('shelljs')

console.log('Copying base folder structure')

shell.exec('mkdir project')
shell.exec('cp -r ./myApp/* ./project')
shell.exec('cd project')
shell.exec('mkdir -p sass views/{layouts,templates,partials}')
shell.exec('touch views/index.html')
shell.exec('touch gulpfile.js package.json')



shell.exec('npm install')

console.log('Completed  without errors')