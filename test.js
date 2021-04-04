const fs = require('fs')
const _ = require('lodash')

const fileContents = fs.readFileSync("./people/felix.json")
console.log(fileContents)

const json = JSON.parse(fileContents)
console.log(json)

console.log(_.lowerCase("id"))