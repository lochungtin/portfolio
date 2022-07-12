import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from './components/footer'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Timothy Lo</title>
				<link rel="icon" href='/logo/favicon.ico' />
			</Head>

			<main className={styles.main}>

			</main>

			<Footer />
		</div>
	)
}
