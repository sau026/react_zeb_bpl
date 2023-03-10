import AssetsImg from '@public/images'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import List from '../components/List'
import Create from '@components/Create'
import Button from '../components/shared/Button'

export default function Home() {


  return (
    <div className={styles.container}>
      <Head>
        <title>To do list</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <Create></Create><br></br>
       <List></List>
      </main>
    </div>
  )
}
