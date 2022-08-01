import Image from 'next/image';

import { obj2arr } from '../../../api/firebase';
import Card from '../../../components/card';
import ReadMore from '../../../components/readmore';

import textStyles from '../../../../styles/text.module.css';
import styles from './projectblock.module.css';

export default function ProjectBlock({ data }) {
	if (!data) return <div></div>;

	return (
		<Card style={styles.root}>
			<p className={textStyles.itemDetailTitle}>
				<b>{data.name}</b>
			</p>
			<p className={styles.desc}>{data.desc}</p>
			<div className={styles.tagContainer}>
				{obj2arr(data.tags).map((tag, index) => (
					<div className={styles.tag} key={index}>
						<b>{tag.name}</b>
					</div>
				))}
			</div>
			<div className={styles.readMoreContainer}>
				<a className={styles.ghBtn} href={`https://github.com/lochungtin/${data.repo}`}>
					<Image src='/icons/socials/github.svg' width={30} height={30} alt='gh' />
				</a>
				<ReadMore href={data.href} />
			</div>
		</Card>
	);
}
