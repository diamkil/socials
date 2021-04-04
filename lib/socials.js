import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import styles from '../styles/socials.module.css'
import { getSocialLink, getSocialName } from './socialsinfo'

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

export async function socialLink(social, user) {
    if (user == "none") {
        return (
            <span className={styles.social}></span>
        ).toString
    } else {
        const socialLink = getSocialLink(social, user)
        const socialName = getSocialName(social)
        const socialIcon = "/img/" + social + ".png"
        return (
            <div>
                <a href={socialLink} className={styles.social + " " + styles.link}>
                    <img className={styles.socialimg} src={socialIcon} alt={socialName}/>
                    <h3 className={styles.linktitle}>{socialName}</h3>
                </a>
            </div>
        ).toString()
    }
}