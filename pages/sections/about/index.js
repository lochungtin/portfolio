import { useState } from 'react';
import Image from 'next/image';

import { obj2arr } from '../../api/firebase';
import Card from '../../components/card';
import SeeMore from '../../components/seemore';
import useMediaQuery from '../../utils/media';
import Codebox from './codebox';
import SkillDisplay from './skilldisplay';

import commonStyles from '../../../styles/common.module.css';
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
                    <p className={styles.title}>Timothy Lo</p>
                    <p className={styles.subtitle}>Machine Learning Research Student</p>
                </div>
                <Codebox />
            </div>
            <div className={`${commonStyles.halfRow} ${styles.aboutRow}`}>
                <div className={styles.aboutCellRoot}>
                    <Card>
                        <div className={styles.aboutCell}>
                            <p className={styles.title}>AI and ML</p>
                            <p>I have taken a handful of online courses about both supervised and reinforcement learning and have taught myself to use popular ML frameworks such as <code>TensorFlow</code> and <code>PyTorch</code>.</p>
                            <p>My undergrad final year project is to compare characteristics of <code>genetics algorithms</code> and classic <code>temporal reinforcement learning</code> using the Pacman environment.</p>
                            <p>I am now currently working on image recognition and <code>segmentation</code> tasks on ultrasonic images.</p>
                        </div>
                    </Card>
                </div>
                <div className={styles.aboutCellRoot}>
                    <Card>
                        <div className={styles.aboutCell}>
                            <p className={styles.title}>Software Dev</p>
                            <p>I have been developing with <code>React JS</code> and <code>React Native</code> for 4 years. I have developed a few mobile apps, some of which have been released on Github as downloadable APKs.</p>
                            <p>After gaining a good grip on React and React Native, I am now branching out to other web and mobile frameworks such as <code>NextJS</code> and <code>Flutter</code>.</p>
                        </div>
                    </Card>
                </div>
            </div>
            <p className={`${styles.title} ${styles.skillTitle}`}>My Skills</p>
            <div className={commonStyles.halfRow}>
                {mainSkills.map((data, index) =>
                    <div className={styles.mainSkillCellRoot} key={index}>
                        <Card>
                            <div className={styles.mainSkillCell}>
                                <Image
                                    src={`/icons/tech/${data.icon}.svg`}
                                    width={60} height={60} alt='react'
                                />
                                <p className={styles.subtitle}>{data.name}</p>
                                <p className={styles.skillText}><code>{data.subtext}</code></p>
                            </div>
                        </Card>
                    </div>)}
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
            <div className={styles.seeMoreRoot}>
                <SeeMore onClick={val => toggleMoreSkills(val)} />
            </div>
        </section>
    );
}
