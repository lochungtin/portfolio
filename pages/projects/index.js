import Head from 'next/head';
import Footer from '../components/footer';
import Header from '../components/header';

export default function Projects() {
    return (
        <div>
            <Head>
                <title>My Projects</title>
                <link rel="icon" href='/logo/favicon.ico' />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>

            <Header />
            
            <Footer />
        </div>
    );
}
