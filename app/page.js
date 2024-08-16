'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { isMobile } from 'react-device-detect';
import { useState, useEffect } from 'react';
import Bienvenue from '@/components/bienvenue/bienvenue';

export default function Home() {
  const [contenue, setContenue] = useState(<></>);
  
  useEffect(() => {
    if(isMobile){
      setContenue(<Bienvenue />);
    } else {
      setContenue(<p>Retourne sur mobile !</p>);
    }
  }, [isMobile])
  
  
  return (
    <main className={styles.main}>
      {contenue}
    </main>
  )
}
