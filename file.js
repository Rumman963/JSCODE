const fsa = require('fs'); //fs is AN EXTERNAL LIBRARY

const path=fsa.readFileSync('a.txt', "utf-8")
console.log(path)
