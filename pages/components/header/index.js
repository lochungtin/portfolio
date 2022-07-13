import Image from 'next/image';
import Link from 'next/link';

import styles from './header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href='/'>
                <a className={styles.headerLink}>ABOUT</a>
            </Link>
            <Link href='/'>
                <a className={styles.headerLink}>EDUCATION</a>
            </Link>
            <Link href='/'>
                <Image src='/logo/logo_full_c.svg' height={50} width={200} alt='logo' />
            </Link>
            <Link href='/'>
                <a className={styles.headerLink}>PROJECTS</a>
            </Link>
            <Link href='/'>
                <a className={styles.headerLink}>ACHIEVEMENTS</a>
            </Link>
        </header>
    );
}
