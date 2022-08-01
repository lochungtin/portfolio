import Image from 'next/image';
import { useState } from 'react';

import { obj2arr } from '../../api/firebase';
import Card from '../../components/card';
import SeeMore from '../../components/seemore';
import useMediaQuery from '../../utils/media';
import SkillDisplay from '../skills/skilldisplay';

import layoutStyles from '../../../styles/layout.module.css';
import textStyles from '../../../styles/text.module.css';
import styles from './skills.module.css';

export default function Skills({ main, other }) {
	const [moreSkills, toggleMoreSkills] = useState(false);
	const isMobile = useMediaQuery();

	if (!main) return <div></div>;

	const mainSkills = obj2arr(main);

	if (!other) return <div></div>;

	const otherSkills = [[], []];
	if (isMobile) otherSkills[0] = obj2arr(other);
	else obj2arr(other).forEach((data, index) => otherSkills[(index % 2 === 1) * 1].push(data));

	return (
		<section id='skills'>
			<p className={`${textStyles.sectionTitle} ${textStyles.orange} ${styles.skillTitle}`}>
				<b>My Skills</b>
			</p>
			<div className={layoutStyles.row}>
				{mainSkills.map((data, index) => (
					<Card style={styles.mainSkillCell} key={index}>
						<Image src={`/icons/tech/${data.icon}.svg`} width={60} height={60} alt='react' />
						<p className={styles.subtitle}>{data.name}</p>
						<p className={styles.skillText}>
							<code>{data.subtext}</code>
						</p>
					</Card>
				))}
			</div>
			{moreSkills ? (
				<div className={`${layoutStyles.row} ${styles.skillRow}`}>
					<div>
						{otherSkills[0].map((data, index) => (
							<SkillDisplay data={data} key={index} />
						))}
					</div>
					{!isMobile ? (
						<div>
							{otherSkills[1].map((data, index) => (
								<SkillDisplay data={data} key={index} />
							))}
						</div>
					) : null}
				</div>
			) : null}
			<SeeMore onClick={(val) => toggleMoreSkills(val)} style={styles.seeMore} />
		</section>
	);
}
