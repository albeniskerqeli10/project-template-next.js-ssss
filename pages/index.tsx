import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
        <div className='box'>
        <Image src="https://a0.muscache.com/im/pictures/d99ba571-4ea2-453d-8eb3-11459a57a038.jpg?im_w=720"/>
        <h1>Live your passion</h1>
        </div>
    </div>
  )
}

export default Home
