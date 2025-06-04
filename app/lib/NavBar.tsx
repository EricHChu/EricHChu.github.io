import Link from 'next/link';
import styles from './nav.module.css'

export default function NavBar(){

  function openSearch(){
    console.log("Clicked");
  }

    return(
        <div className={styles.nav}>
          <img className={styles.logo} src='/icon.png'/>
          <h1 className='items-center'>Kpctopia</h1>
          <input defaultValue="Search..."></input>
          <img className={styles.search} onClick={openSearch} src='/search.png'/>
          <Link href='/market'><img className={styles.market} src='/market.png'/></Link>
          <button>Login</button>
        </div>
      );
}