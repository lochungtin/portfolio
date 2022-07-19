import Head from 'next/head';
import Image from 'next/image';

import Footer from './components/footer';
import Header from './components/header';
import About from './sections/about';
import Achievements from './sections/achievements';
import Education from './sections/education';
import Projects from './sections/projects';

import styles from '../styles/home.module.css';

export default function Home() {
	return (
		<>
			<Image className={styles.bgImg} src='/bg/about.svg' layout='fill' alt='bg' />
			<div className={styles.container}>
				<Head>
					<title>Timothy Lo</title>
					<link rel="icon" href='/logo/favicon.ico' />
					<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
				</Head>

				<Header />
				<main className={styles.main}>
					<About />
					<Education />
					<Projects />
					<Achievements />
				</main>
				<Footer />
			</div>
		</>
	);
}
