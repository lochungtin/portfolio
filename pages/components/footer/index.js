import Image from 'next/image';

import textStyles from '../../../styles/text.module.css';
import styles from './footer.module.css';

const data = [
	{ name: 'twitter', link: 'https://twitter.com/EnigmaOffline' },
	{ name: 'discord', link: 'https://discord.com/users/155275561256747008' },
	{ name: 'instagram', link: 'https://www.instagram.com/lochungtin/' },
	{ name: 'github', link: 'https://github.com/lochungtin' },
	{ name: 'npm', link: 'https://www.npmjs.com/~lochungtin' },
	{ name: 'linkedin', link: 'https://www.linkedin.com/in/timothy-lo-chung-tin/' },
	{ name: 'gmail', link: 'mailto: lochungtin@gmail.com' },
];

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerLogoContainer}>
				<Image src='/logo/logo_full_c.svg' width={200} height={50} alt='logo' />
			</div>
			<div className={styles.footerIconbar}>
				{data.map((values) => (
					<a className={styles.footerBtn} key={values.name} href={values.link}>
						<Image src={`/icons/socials/${values.name}.svg`} width={25} height={25} alt={values.name} />
					</a>
				))}
			</div>
			<p>Made with 🧡 & ☕ by Timothy Lo</p>
			<p className={`${styles.footerARRtext} ${textStyles.lgrey}`}>
				Copyright © 2022 Lo Chung Tin. All Rights Reserved.
			</p>
		</footer>
	);
}
