import Image from 'next/image'
import styles from './page.module.css'
import { isMobile } from 'react-device-detect';

export default function Home() {
  return (
    <main className={styles.main}>
      {isMobile 
        ? <p>Nous sommes sur MOBILE.</p>
        : <p>Retourne sur ton téléphone !</p>
      }
    </main>
  )
}
