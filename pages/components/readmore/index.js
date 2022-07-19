import Image from "next/image";
import Link from "next/link";

import styles from './readmore.module.css';

export default function ReadMore({ textOverride, href }) {
    return (
        <Link href={href || ''}>
            <a className={styles.root}>
                <p className={styles.text}>{textOverride || 'Read More'}</p>
                <Image src='/icons/chevron-right.svg' width={20} height={20} alt='right' />
            </a>
        </Link>
    );
}