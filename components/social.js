import styles from '../styles/socials.module.css'

export default function Social({ socialInfo }) {
    return (
        <div>
            <a href={socialInfo[0]} className={styles.social}>
                <img className={styles.socialimg} src={socialInfo[1]} alt={socialInfo[2]}/>
                <h3 className={styles.linktitle}>{socialInfo[2]}</h3>
            </a>
        </div>
    )
}