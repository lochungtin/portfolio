import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { getAllProjects, getFilterTags } from '../api/firebase';
import Footer from '../components/footer';
import Header from '../components/header';
import ReadMore from '../components/readmore';
import useMediaQuery from '../utils/media';
import FilterTag from './filtertag';

import styles from '../../styles/home.module.css';
import layoutStyles from '../../styles/layout.module.css';
import textStyles from '../../styles/text.module.css';

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

	if (!r0 || !r1) return <div></div>;

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

	const toggleExpanded = () => setExpanded(!expanded);

	const clearSearch = () => setTextFilter('');

	const handleSearchChange = (event) => setTextFilter(event.target.value);

	const clearTagFilter = () => setTagFilter(emptyTagFilter);

	const handleLabelToggle = (key) =>
		setTagFilter(() => {
			let next = { ...tagFilter };
			next[key] = !next[key];
			return next;
		});

	let filtered = Object.entries(projects).map(([key, data]) => ({ ...data, name: key }));

	let tagFiltering = false;
	for (const [tag, filtering] of Object.entries(tagFilter))
		if (filtering) {
			tagFiltering = true;
			break;
		}

	if (tagFiltering)
		filtered = filtered.filter((project) => {
			for (const tagKey of Object.keys(project.tags)) if (tagFilter[tagKey]) return true;

			return false;
		});

	if (textFilter)
		filtered = filtered.filter(
			(project) =>
				project.desc.toLowerCase().includes(textFilter) || project.name.toLowerCase().includes(textFilter),
		);

	const len = filtered.length - 1;

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
							onChange={handleSearchChange}
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
							<FilterTag tag='Clear Filters' checked={false} handleToggle={clearTagFilter} />
						</div>
					) : null}
					<div className={styles.projectList}>
						{filtered.map((project, index) => (
							<div
								className={`${layoutStyles.itemDetailBox} ${
									len === index ? layoutStyles.itemDetailBoxLast : ''
								}`}
								key={index}>
								<p className={textStyles.itemDetailTitle}>{project.name}</p>
								<p>{project.desc}</p>
								<div className={styles.projectTagList}>
									{Object.keys(project.tags).map((tagKey, index) => (
										<div className={styles.projectTag} key={index}>
											<p>{tags[tagKey]}</p>
										</div>
									))}
								</div>
								<div className={styles.projectLangList}>
									{Object.entries(project.lang).map(([key, lang], index) => (
										<div className={styles.projectLangImg} key={index}>
											<Image src={`/icons/tech/${lang}.svg`} width={25} height={25} alt='lang' />
										</div>
									))}
								</div>
								<div className={styles.projectLinkBox}>
									<a
										className={styles.projectGithubLink}
										href={`https://github.com/lochungtin/${project.repo}`}>
										<Image src={`/icons/socials/github.svg`} width={30} height={30} alt='gh' />
									</a>
									<ReadMore href={project.href} />
								</div>
							</div>
						))}
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
