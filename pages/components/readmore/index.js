import Image from 'next/image';
import Link from 'next/link';

import layoutStyles from '../../../styles/layout.module.css';
import textStyles from '../../../styles/text.module.css';

export default function ReadMore({ textOverride, href, style }) {
	return (
		<Link href={href || ''}>
			<a className={`${layoutStyles.bulletButtonRoot} ${style}`}>
				<p className={textStyles.bulletButtonText}>{textOverride || 'Read More'}</p>
				<Image src='/icons/chevron-right.svg' width={20} height={20} alt='right' />
			</a>
		</Link>
	);
}
