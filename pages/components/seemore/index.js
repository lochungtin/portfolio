import Image from 'next/image';
import { useState } from 'react';

import styles from './seemore.module.css';

export default function SeeMore({ onClick }) {
    const [expanded, toggleExpanded] = useState(false);

    const toggle = () => {
        onClick(!expanded);
        toggleExpanded(!expanded);
    }

    return (
        <button className={styles.root} onClick={toggle}>
            <p className={styles.text}>
                {expanded ? 'See Less' : 'See More'}
            </p>
            <Image
                src={`/icons/${expanded ? 'down' : 'up'}.svg`}
                width={20} height={20} alt='icon'
            />
        </button>
    )
}
