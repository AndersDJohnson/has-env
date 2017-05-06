#!/usr/bin/env node

var hasEnv = require('.')

var key = process.argv[2]

if (!hasEnv(key)) process.exit(1)
