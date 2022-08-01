import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import useMediaQuery from '../../utils/media';

import styles from './header.module.css';

export default function Header() {
	const [expanded, toggleExpanded] = useState(false);
	const isMobile = useMediaQuery();
	const showItems = isMobile == expanded;

	const toggle = () => toggleExpanded(!expanded);

	return (
		<header className={styles.header}>
			{isMobile ? (
				<button className={styles.menu} onClick={toggle}>
					<Image src='/icons/menu.svg' height={30} width={30} alt='menu' />
				</button>
			) : null}
			{isMobile ? (
				<div className={styles.logo}>
					<Link href='/'>
						<Image src='/logo/logo_full_c.svg' height={50} width={200} alt='logo' />
					</Link>
				</div>
			) : null}
			<Link href='/#about'>
				<a className={`${styles.headerLink} ${showItems ? '' : styles.hidden}`}>{showItems ? 'ABOUT' : ''}</a>
			</Link>
			<Link href='/#education'>
				<a className={`${styles.headerLink} ${showItems ? '' : styles.hidden}`}>
					{showItems ? 'EDUCATION' : ''}
				</a>
			</Link>
			{!isMobile ? (
				<Link href='/'>
					<Image src='/logo/logo_full_c.svg' height={50} width={200} alt='logo' />
				</Link>
			) : null}
			<Link href='/projects'>
				<a className={`${styles.headerLink} ${showItems ? '' : styles.hidden}`}>
					{showItems ? 'PROJECTS' : ''}
				</a>
			</Link>
			<Link href='/#achievements'>
				<a className={`${styles.headerLink} ${showItems ? '' : styles.hidden}`}>
					{showItems ? 'ACHIEVEMENTS' : ''}
				</a>
			</Link>
		</header>
	);
}
