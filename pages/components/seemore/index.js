import Image from 'next/image';
import { useState } from 'react';

import layoutStyles from '../../../styles/layout.module.css';
import textStyles from '../../../styles/text.module.css';

export default function SeeMore({ onClick, style }) {
    const [expanded, toggleExpanded] = useState(false);

    const toggle = () => {
        onClick(!expanded);
        toggleExpanded(!expanded);
    }

    return (
        <button className={`${layoutStyles.bulletButtonRoot} ${style}`} onClick={toggle}>
            <p className={textStyles.bulletButtonText}>
                {expanded ? 'See Less' : 'See More'}
            </p>
            <Image
                src={`/icons/chevron-${expanded ? 'up' : 'down'}.svg`}
                width={20} height={20} alt='icon'
            />
        </button>
    )
}
