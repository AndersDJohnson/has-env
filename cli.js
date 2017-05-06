#!/usr/bin/env node

var hasEnv = require('.')

var argv = process.argv
var key = argv[2]
var value = argv[3]

if (!hasEnv(key, value)) process.exit(1)
