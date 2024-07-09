// src/components/Header/Header.tsx

import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image 
            src="/images/logo.png" 
            alt="Brilliant Logo" 
            width={120} 
            height={40} 
          />
        </Link>
      </div>
      <nav>
        <Link href="/login" className={styles.loginButton}>
          Log in
        </Link>
      </nav>
    </header>
  )
}