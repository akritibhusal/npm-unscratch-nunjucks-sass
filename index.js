#!/usr/bin/env node

var shell = require('shelljs')
var path = require('path')

var TEMPLATE_DIR = path.join(__dirname, '..', 'unscratcher/myApp')

console.log('Copying base folder structure..')

shell.mkdir('project')
shell.exec('cp -r ' + TEMPLATE_DIR + '/* ./project', {async: false}, function(){
    shell.exec('cd project && npm install', {async: false}, function(){
        console.log('Dependencies installed successfully.')
    })
})
