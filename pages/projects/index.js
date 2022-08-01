import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

import Footer from '../components/footer';
import Header from '../components/header';
import useMediaQuery from '../utils/media';

import styles from '../../styles/home.module.css';
import layout from '../../styles/layout.module.css';
import text from '../../styles/text.module.css';

export default function Projects() {
	const [textFilter, setTextFilter] = useState('');
	const [expanded, setExpanded] = useState(false);
	const isMobile = useMediaQuery();

	const showFilter = isMobile && expanded;

	const clearSearch = () => setTextFilter('');

	const handleTextChange = (event) => setTextFilter(event.target.value);

	const toggleExpanded = () => setExpanded(!expanded);

	return (
		<div className={styles.container}>
			<Head>
				<title>My Projects</title>
				<link rel='icon' href='/logo/favicon.ico' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0'></meta>
			</Head>

			<Header />
			<main className={styles.main}>
				<div className={styles.filterRoot}>
					<div className={styles.searchRoot}>
						<input
							className={styles.searchInput}
							type='text'
							placeholder='Search Filter ...'
							value={textFilter}
							onChange={handleTextChange}
						/>
						<button onClick={clearSearch}>
							<Image src='/icons/cancel.svg' alt='cancel' width={25} height={25} />
						</button>
					</div>
					{isMobile ? (
						<button onClick={toggleExpanded}>
							<Image src='/icons/filter.svg' alt='filter' width={35} height={35} />
						</button>
					) : null}
				</div>
				{showFilter ? <div></div> : null}
				<div className={layout.itemDetailBox}>
					<p className={text.itemDetailTitle}>Some Project Name</p>
				</div>
				<div className={layout.itemDetailBox}>
					<p className={text.itemDetailTitle}>Some Project Name</p>
				</div>
				<div className={layout.itemDetailBox}>
					<p className={text.itemDetailTitle}>Some Project Name</p>
				</div>
			</main>
			<Footer />
		</div>
	);
}
