import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { getAllProjects, getFilterTags } from '../api/firebase';
import Footer from '../components/footer';
import Header from '../components/header';
import useMediaQuery from '../utils/media';
import FilterTag from './filtertag';

import styles from '../../styles/home.module.css';
import layout from '../../styles/layout.module.css';
import text from '../../styles/text.module.css';

export default function Projects() {
	const [r0, setR0] = useState(false);
	const [r1, setR1] = useState(false);

	const [d0, setD0] = useState({});
	const [d1, setD1] = useState({});

	useEffect(() => {
		if (!r0)
			getFilterTags().then((data) => {
				setD0(data);
				setR0(true);
			});
		if (!r1)
			getAllProjects().then((data) => {
				setD1(data);
				setR1(true);
			});
	});

	return <DisplayHandling tags={d0} projects={d1} />;
}

function DisplayHandling({ tags, projects }) {
	const emptyTagFilter = {};
	Object.keys(tags).forEach((key) => {
		emptyTagFilter[key] = false;
	});

	const [textFilter, setTextFilter] = useState('');
	const [tagFilter, setTagFilter] = useState(emptyTagFilter);
	const [expanded, setExpanded] = useState(false);
	const isMobile = useMediaQuery();

	const showFilter = isMobile === expanded;

	const clearSearch = () => setTextFilter('');

	const toggleExpanded = () => setExpanded(!expanded);

	const handleTextChange = (event) => setTextFilter(event.target.value);

	const handleLabelToggle = (key) =>
		setTagFilter(() => {
			let next = { ...tagFilter };
			next[key] = !next[key];
			return next;
		});

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
							<div className={styles.clearBtn}>
								<Image src='/icons/cancel.svg' alt='cancel' width={25} height={25} />
							</div>
						</button>
					</div>
					{isMobile ? (
						<button onClick={toggleExpanded}>
							<div className={styles.expandBtn}>
								<Image src='/icons/filter.svg' alt='filter' width={30} height={30} />
							</div>
						</button>
					) : null}
				</div>
				<div className={styles.horizontalSplit}>
					{showFilter ? (
						<div className={styles.tagList}>
							<p>
								<b>Project Tag Filter</b>
							</p>
							{Object.entries(tags).map(([key, tag], index) => (
								<FilterTag
									key={index}
									tag={tag}
									tagKey={key}
									checked={tagFilter[key]}
									handleToggle={handleLabelToggle}
								/>
							))}
							<FilterTag
								tag='Clear Filters'
								checked={false}
								handleToggle={() => setTagFilter(emptyTagFilter)}
							/>
						</div>
					) : null}
					<div className={styles.projectList}>
						{Object.entries(projects).map(([key, project], index) => (
							<div className={`${layout.itemDetailBox} ${styles.projectDetailBox}`} key={index}>
								<div>
									<p className={text.itemDetailTitle}>{key}</p>
									<p>{project.desc}</p>
									<div className={styles.projectTagList}></div>
								</div>
								<div className={styles.projectLangList}></div>
							</div>
						))}
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
