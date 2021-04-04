import Head from 'next/head'
import styles from '../styles/someone.module.css'
import { getPeopleData } from '../lib/socials'
import _ from 'lodash'

export default function Home({ socialsData, userName }) {
  return (
    <div className={styles.container}>
      <div className={styles.sociallinks}>
        <Head>
          <title>{`${_.startCase(userName)}'s Socials`}</title>
        </Head>
        <div className={styles.user}>
          <img
            className={styles.userimg}
            src={socialsData.picture}
            height={100}
            width={100}
            alt={socialsData.name + "'s Image"}
          />
          <h1 className={styles.userh1}>Félix Pratt</h1>
        </div>
        {Object.entries(socialsData.socials).map(([id, value]:[string, string]) => (
          <div>
            <a href={value} target="_blank" rel="noreferrer" className={styles.social}>
                <img className={styles.socialimg} src={"/img/" + _.toLower(id) + ".png"} alt={_.startCase(id)}/>
                <h3 className={styles.linktitle}>{_.startCase(id)}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const socialsData = await getPeopleData(params.someone)
  const userName = params.someone
  return {
    props: {
      socialsData,
      userName
    }
  }
}