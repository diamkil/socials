const fs = require('fs')
const _ = require('lodash')

const fileContents = fs.readFileSync("./people/felix.json")
console.log(fileContents)

const json = JSON.parse(fileContents)
console.log(json)

console.log("Entries")
console.log(Object.entries(json.socials))
Object.entries(json.socials).forEach(([key, value]) => {
    console.log(key + " - " + value)
})