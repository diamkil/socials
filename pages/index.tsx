import Head from 'next/head'
import styles from '../styles/someone.module.css'
import { getPeopleData } from '../lib/socials'
import _ from 'lodash'

export default function Home({ socialsData }) {
  return (
    <div className={styles.container}>
      <div className={styles.sociallinks}>
        <Head>
          <title>{`${socialsData.name}'s Socials`}</title>
          <meta charSet="UTF-8"/>
          <meta property="og:title" content={`${_.startCase(socialsData.name)}'s Socials`}/>
          <meta property="og:site_name" content="Socials"/>
          <meta property="og:type" content="website"/>
          <meta property="og:image" content={socialsData.picture}/>
        </Head>
        <div className={styles.user}>
          <img
            className={styles.userimg}
            src={socialsData.picture}
            height={100}
            width={100}
            alt={socialsData.name + "'s Image"}
          />
          <h1 className={styles.userh1}>{socialsData.name}</h1>
        </div>
        {Object.entries(socialsData.socials).map(([id, value]:[string, string]) => (
          <div>
            <a href={value} target="_blank" rel="noreferrer" className={styles.social}>
                <img
                  className={styles.socialimg}
                  src={"/img/" + _.toLower(id) + ".png"}
                  alt={_.startCase(id)}
                  height={55}
                  width={55}
                />
                <h3 className={styles.linktitle}>{_.startCase(id)}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const socialsData = await getPeopleData("default")
  return {
    props: {
      socialsData
    }
  }
}