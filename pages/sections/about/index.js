import { useState } from 'react';
import Image from 'next/image';

import { obj2arr } from '../../api/firebase';
import Card from '../../components/card';
import SeeMore from '../../components/seemore';
import useMediaQuery from '../../utils/media';
import Codebox from './codebox';
import SkillDisplay from './skilldisplay';

import commonStyles from '../../../styles/common.module.css';
import textStyles from '../../../styles/text.module.css';
import styles from './about.module.css';

export default function About({ main, other }) {
    const [moreSkills, toggleMoreSkills] = useState(false);
    const isMobile = useMediaQuery();

    if (!main)
        return <div></div>;

    const mainSkills = obj2arr(main);

    if (!other)
        return <div></div>;

    const otherSkills = [[], []];
    if (isMobile)
        otherSkills[0] = obj2arr(other);
    else
        obj2arr(other).forEach((data, index) => otherSkills[(index % 2 === 1) * 1].push(data));

    return (
        <section id='about'>
            <div className={commonStyles.halfRow}>
                <div className={styles.titleText}>
                    <p className={styles.welcome}>Hi there! I am</p>
                    <p className={`${styles.title} ${textStyles.orange}`}><b>Timothy Lo</b></p>
                    <p className={`${styles.subtitle} ${textStyles.grey}`}>Machine Learning Research Student</p>
                </div>
                <Codebox />
            </div>
            <div className={`${commonStyles.halfRow} ${styles.aboutRow}`}>
                <Card style={styles.aboutCell}>
                    <p className={`${styles.title} ${textStyles.orange}`}><b>AI and ML</b></p>
                    <p>I have taken a handful of online courses about both supervised and reinforcement learning and have taught myself to use popular ML frameworks such as <code>TensorFlow</code> and <code>PyTorch</code>.</p>
                    <p>My undergrad final year project is to compare characteristics of <code>genetics algorithms</code> and classic <code>temporal reinforcement learning</code> using the Pacman environment.</p>
                    <p>I am now currently working on image recognition and <code>segmentation</code> tasks on ultrasonic images.</p>
                </Card>
                <Card style={styles.aboutCell}>
                    <p className={`${styles.title} ${textStyles.orange}`}><b>Software Dev</b></p>
                    <p>I have been developing with <code>React JS</code> and <code>React Native</code> for 4 years. I have developed a few mobile apps, some of which have been released on Github as downloadable APKs.</p>
                    <p>After gaining a good grip on React and React Native, I am now branching out to other web and mobile frameworks such as <code>NextJS</code> and <code>Flutter</code>.</p>
                </Card>
            </div>
            <p className={`${textStyles.sectionTitle} ${textStyles.orange} ${styles.skillTitle}`}>My Skills</p>
            <div className={commonStyles.halfRow}>
                {mainSkills.map((data, index) =>
                    <Card style={styles.mainSkillCell} key={index}>
                        <Image
                            src={`/icons/tech/${data.icon}.svg`}
                            width={60} height={60} alt='react'
                        />
                        <p className={styles.subtitle}>{data.name}</p>
                        <p className={styles.skillText}><code>{data.subtext}</code></p>
                    </Card>)}
            </div>
            {moreSkills ? <div className={`${commonStyles.halfRow} ${styles.skillRow}`}>
                <div>
                    {otherSkills[0].map((data, index) =>
                        <SkillDisplay data={data} key={index} />)}
                </div>
                {!isMobile ? <div>
                    {otherSkills[1].map((data, index) =>
                        <SkillDisplay data={data} key={index} />)}
                </div> : null}
            </div> : null}
            <SeeMore onClick={val => toggleMoreSkills(val)} style={styles.seeMore} />
        </section>
    );
}
