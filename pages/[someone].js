import Head from 'next/head'
import styles from '../styles/someone.module.css'
import { getPeopleData, socialLink } from '../lib/socials'

export default function Home({ socialsData, snapLink }) {
  return (
    <div className={styles.container}>
      <div className={styles.sociallinks}>
        <Head>
          <title>Felix's Socials</title>
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

        <div dangerouslySetInnerHTML={{ __html: snapLink }}/>
      </div>
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const socialsData = await getPeopleData(params.someone)
  const snapLink = socialLink("snap", "felix.pratt")
  return {
    props: {
      socialsData,
      snapLink
    }
  }
}