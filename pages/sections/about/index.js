import Card from '../../components/card';
import Codebox from './codebox';

import layoutStyles from '../../../styles/layout.module.css';
import textStyles from '../../../styles/text.module.css';
import styles from './about.module.css';

export default function About() {
	return (
		<section id='about'>
			<div className={`${layoutStyles.row} ${styles.topRow}`}>
				<div className={styles.titleContainer}>
					<p className={styles.welcome}>Hi there! I am</p>
					<p className={`${styles.title} ${textStyles.orange}`}>
						<b>Timothy Lo</b>
					</p>
					<p className={`${styles.subtitle} ${textStyles.grey}`}>Machine Learning Research Student</p>
				</div>
				<Codebox />
			</div>
			<div className={`${layoutStyles.row} ${styles.aboutRow}`}>
				<Card style={styles.aboutCell}>
					<p className={`${styles.title} ${textStyles.orange}`}>
						<b>AI and ML</b>
					</p>
					<p>
						I have taken a handful of online courses about both supervised and reinforcement learning and
						have taught myself to use popular ML frameworks such as <code>TensorFlow</code> and{' '}
						<code>PyTorch</code>.
					</p>
					<p>
						My undergrad final year project is to compare characteristics of{' '}
						<code>genetics algorithms</code> and classic <code>temporal reinforcement learning</code> using
						the Pacman environment.
					</p>
					<p>
						I am now currently working on image recognition and <code>segmentation</code> tasks on
						ultrasonic images.
					</p>
				</Card>
				<Card style={styles.aboutCell}>
					<p className={`${styles.title} ${textStyles.orange}`}>
						<b>Software Dev</b>
					</p>
					<p>
						I have been developing with <code>React JS</code> and <code>React Native</code> for 4 years. I
						have developed a few mobile apps, some of which have been released on Github as downloadable
						APKs.
					</p>
					<p>
						After gaining a good grip on React and React Native, I am now branching out to other web and
						mobile frameworks such as <code>NextJS</code> and <code>Flutter</code>.
					</p>
				</Card>
			</div>
		</section>
	);
}
