'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { isMobile } from 'react-device-detect';
import { useEffect, useState } from 'react';

export default function Home() {
  const [contenueToShow, setContenueToShow] = useState(<></>);
  
  useEffect(() => {
    if(isMobile){
      setContenueToShow(<p>Vous êtes actuellement sur MOBILE.</p>);
    } else {
      setContenueToShow(<p>Retourne sur ton téléphone !</p>);
    }
  }, [isMobile])
  
  
  return (
    <main className={styles.main}>
      {contenueToShow}
    </main>
  )
}
