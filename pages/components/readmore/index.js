import Image from 'next/image';
import Link from 'next/link';

import textStyles from '../../../styles/text.module.css';
import commonStyles from '../../../styles/common.module.css';

export default function ReadMore({ textOverride, href, style }) {
    return (
        <Link href={href || ''}>
            <a className={`${commonStyles.bulletButtonRoot} ${style}`}>
                <p className={textStyles.bulletButtonText}>{textOverride || 'Read More'}</p>
                <Image src='/icons/chevron-right.svg' width={20} height={20} alt='right' />
            </a>
        </Link>
    );
}