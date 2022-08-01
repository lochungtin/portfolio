import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import {
	getAchievements,
	getFormalEducation,
	getMainSkills,
	getOnlineEducation,
	getOtherSkills,
	getPinnedProjects,
} from './api/firebase';
import Footer from './components/footer';
import Header from './components/header';
import About from './sections/about';
import Achievements from './sections/achievements';
import Education from './sections/education';
import Projects from './sections/projects';
import Skills from './sections/skills';

import styles from '../styles/home.module.css';

export default function Home() {
	const [r0, setR0] = useState(false);
	const [r1, setR1] = useState(false);
	const [r2, setR2] = useState(false);
	const [r3, setR3] = useState(false);
	const [r4, setR4] = useState(false);
	const [r5, setR5] = useState(false);

	const [d0, setD0] = useState({});
	const [d1, setD1] = useState({});
	const [d2, setD2] = useState({});
	const [d3, setD3] = useState({});
	const [d4, setD4] = useState({});
	const [d5, setD5] = useState({});

	useEffect(() => {
		if (!r0)
			getMainSkills().then((data) => {
				setD0(data);
				setR0(true);
			});
		if (!r1)
			getOtherSkills().then((data) => {
				setD1(data);
				setR1(true);
			});
		if (!r2)
			getOnlineEducation().then((data) => {
				setD2(data);
				setR2(true);
			});
		if (!r3)
			getFormalEducation().then((data) => {
				setD3(data);
				setR3(true);
			});
		if (!r4)
			getPinnedProjects().then((data) => {
				setD4(data);
				setR4(true);
			});
		if (!r5)
			getAchievements().then((data) => {
				setD5(data);
				setR5(true);
			});
	});

	return (
		<>
			<Image className={styles.bgImg} src='/bg/about.svg' layout='fill' alt='bg' />
			<div className={styles.container}>
				<Head>
					<title>Timothy Lo</title>
					<link rel='icon' href='/logo/favicon.ico' />
					<meta name='viewport' content='width=device-width, initial-scale=1.0'></meta>
				</Head>

				<Header />
				<main className={styles.main}>
					<About />
					<Skills main={d0} other={d1} />
					<Education online={d2} formal={d3} />
					<Projects pinned={d4} />
					<Achievements data={d5} />
				</main>
				<Footer />
			</div>
		</>
	);
}
