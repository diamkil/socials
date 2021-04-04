import fs from 'fs'
import path from 'path'

const informationDirectory = path.join(process.cwd(), 'people')

export function getAllPeopleIds() {
    const files = fs.readdirSync(informationDirectory)

    return files.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.json$/, '')
            }
        }
    })
}

export async function getPeopleData(id) {
    const fullPath = path.join(informationDirectory, `${id}.json`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const JSONcontent = JSON.parse(fileContents)

    return JSONcontent
}