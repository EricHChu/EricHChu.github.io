'use client'

import Link from 'next/link';
import styles from './nav.module.css'

//<Link href='/market'><img className={styles.market} src='/market.png'/></Link>

export default function NavBar(){

  function openSearch(){
    console.log("Clicked");
  }

    return(
        <div className={styles.nav}>
          <img className={styles.logo} src='/icon.png'/>
          <h1 className='items-center'>Eric Chu</h1>
          <input placeholder="Search..."></input>
          <img className={styles.search} onClick={openSearch} src='/search.png'/>
        </div>
      );
}