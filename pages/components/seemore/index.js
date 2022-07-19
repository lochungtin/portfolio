import Image from 'next/image';
import { useState } from 'react';

import commonStyles from '../../../styles/common.module.css';

export default function SeeMore({ onClick }) {
    const [expanded, toggleExpanded] = useState(false);

    const toggle = () => {
        onClick(!expanded);
        toggleExpanded(!expanded);
    }

    return (
        <button className={commonStyles.bulletButtonRoot} onClick={toggle}>
            <p className={commonStyles.bulletButtonText}>
                {expanded ? 'See Less' : 'See More'}
            </p>
            <Image
                src={`/icons/chevron-${expanded ? 'up' : 'down'}.svg`}
                width={20} height={20} alt='icon'
            />
        </button>
    )
}
