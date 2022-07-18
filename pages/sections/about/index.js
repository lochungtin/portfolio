import Codebox from './codebox';

import styles from './about.module.css';

export default function About() {

    return (
        <section id='about'>
            <div className={styles.frontRow}>
                <div className={styles.titleText}>
                    <p>Hi! I am</p>
                    <p className={styles.title}>Timothy Lo</p>
                    <p className={styles.subtitle}>Machine Learning Research Student</p>
                </div>
                <Codebox />
            </div>
        </section>
    );
}
