import Head from 'next/head'
import styles from '../styles/someone.module.css'
import { getPeopleData } from '../lib/socials'
import { startCase, toLower } from 'lodash'

export default function Home({ socialsData }) {
  return (
    <div className={styles.container}>
      <div className={styles.sociallinks}>

        <Head>
          <title>{`${socialsData.name}'s Socials`}</title>
          <meta charSet="UTF-8" />

          {/*
            1. Set title on discord, twitter, etc. Uses the name of the user which page it is from the json
            2. Set the name of the site to be socials in social networks
            3. Define it as a website (it's a website)
            4. Set the preview image to be the user's picture which is shown on user's page
          */}
          <meta property="og:title" content={`${socialsData.name}'s Socials`} />
          <meta property="og:site_name" content="Socials" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content={socialsData.picture} />

          <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png" />
          <link rel="manifest" href="./site.webmanifest" />

          <link rel="alternate icon" href={socialsData.picture} />

          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>

        {/* Div which shows the name and profile picture of the user */}
        <div className={styles.user}>
          <img
            className={styles.userimg}
            src={socialsData.picture}
            height={100}
            width={100}
            alt={`${socialsData.name}'s Profile Image`}
          />

          <h1 className={styles.userh1}>{socialsData.name}</h1>
        </div>

        { /* We use Object.entries to make the objects (which are from the json) into an Array.
            We then use .map to get values from that array. 
            By using the javascript arrow we are iterating for each value pairs the following code which is the code for each socials 
          */
          Object.entries(socialsData.socials).map(([id, value]: [string, string]) => (
            /* 
              1. We give a div to each Social Network so that it remains separated
              2. We use an a tag which wraps everything else (Image and title). This allows to make the whole thing a button instead of only the text. We style on this too
              3. The src tag for img is made of /img/ which refers to the folder in public with the logos.
                 We use toLower from lodash to make the string fully lower case (In our json we use camelCase for social networks with multiple works so we want fully lowercase for images)
                 Id refers to the vallue we mapped earlier.
                 We also of course add .png to make it the link to the exact image
              4. For our h3 tag we use startCase from lodash because it will turn "camelCase" into "Start Case" Seperating the two words and applying capitalization
            */

            <div>
              <a href={value} target="_blank" rel="noreferrer" className={styles.social}>
                <img
                  className={styles.socialimg}
                  src={`/img/${toLower(id)}.png`}
                  alt={startCase(id)}
                  height={55}
                  width={55}
                />
                <h3 className={styles.linktitle}>{startCase(id)}</h3>
              </a>
            </div>
          ))}
      </div>
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const socialsData = await getPeopleData(params.someone)
  return {
    props: {
      socialsData
    }
  }
}