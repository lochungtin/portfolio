import Image from 'next/image';

import Codebox from './codebox';

import styles from './about.module.css';

export default function About() {

    return (
        <section id='about'>
            <div className={styles.row}>
                <div className={styles.titleText}>
                    <p className={styles.welcome}>Hi there! I am</p>
                    <p className={styles.title}>Timothy Lo</p>
                    <p className={styles.subtitle}>Machine Learning Research Student</p>
                </div>
                <Codebox />
            </div>
            <div className={`${styles.row} ${styles.aboutRow}`}>
                <div className={styles.aboutCell}>
                    <p className={styles.title}>AI and ML</p>
                    <p>I have taken a handful of online courses about both supervised and reinforcement learning and have taught myself to use popular ML frameworks such as <code>TensorFlow</code> and <code>PyTorch</code>.</p>
                    <p>My undergrad final year project is to compare characteristics of <code>genetics algorithms</code> and classic <code>temporal reinforcement learning</code> using the Pacman environment.</p>
                    <p>I am now currently working on image recognition and <code>segmentation</code> tasks on ultrasonic images.</p>
                </div>
                <div className={styles.aboutCell}>
                    <p className={styles.title}>Software Dev</p>
                    <p>I have been developing with <code>React JS</code> and <code>React Native</code> for 4 years. I have developed a few mobile apps, some of which have been released on Github as downloadable APKs.</p>
                    <p>After gaining a good grip on React and React-Native, I am now branching out to other web and mobile frameworks such as <code>NextJS</code> and <code>Flutter</code>.</p>
                </div>
            </div>
        </section>
    );
}
