#!/usr/bin/env node
let random = require('../src/index.js')
random.randomSentence().then((data)=>console.log(data))