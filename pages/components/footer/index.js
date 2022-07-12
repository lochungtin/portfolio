import Image from 'next/image';

import styles from './footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerLogoContainer}>
                <Image src='/logo/logo_full.svg' width={200} height={50} alt='logo' />
            </div>
            <div className={styles.footerIconbar}>
                <a className={styles.footerBtn}>
                    <Image src='/icons/twitter.svg' width={25} height={25} alt='twitter' />
                </a>
                <a className={styles.footerBtn}>
                    <Image src='/icons/discord.svg' width={25} height={25} alt='discord' />
                </a>
                <a className={styles.footerBtn}>
                    <Image src='/icons/instagram.svg' width={25} height={25} alt='insta' />
                </a>
                <a className={styles.footerBtn}>
                    <Image src='/icons/github.svg' width={25} height={25} alt='github' />
                </a>
                <a className={styles.footerBtn}>
                    <Image src='/icons/npm.svg' width={25} height={25} alt='npm' />
                </a>
                <a className={styles.footerBtn}>
                    <Image src='/icons/linkedin.svg' width={25} height={25} alt='linkedin' />
                </a>
                <a className={styles.footerBtn}>
                    <Image src='/icons/gmail.svg' width={25} height={25} alt='gmail' />
                </a>
            </div>
            <p>Made with 💙 & ☕ by Timothy Lo</p>
            <p className={styles.footerARRtext}>Copyright © 2022 Lo Chung Tin. All Rights Reserved.</p>
        </footer>
    );
}
