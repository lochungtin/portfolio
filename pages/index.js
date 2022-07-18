import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Footer from './components/footer';
import Header from './components/header';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Timothy Lo</title>
				<link rel="icon" href='/logo/favicon.ico' />
				<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
			</Head>

			<Header />
			<main className={styles.main}>

			</main>
			<Footer />
		</div>
	);
}
