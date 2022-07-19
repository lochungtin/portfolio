import { useState } from 'react';
import Image from 'next/image';

import Card from '../../components/card';
import SeeMore from '../../components/seemore';
import useMediaQuery from '../../utils/media';
import Codebox from './codebox';
import SkillDisplay from './skilldisplay';

import styles from './about.module.css';

const mainSkills = [
    { icon: 'reactjs', name: 'React Family', subtext: 'ReactJS, React Native, NextJS, Redux' },
    { icon: 'python', name: 'Python', subtext: 'NumPy, PyTorch, TensorFlow, TKinter' },
    { icon: 'cpp', name: 'C++', subtext: 'Arduino, Expressif, OpenGl, OpenCV' },
];

const skills = [
    { name: 'JavaScript', rating: 5 },
    { name: 'TypeScript', rating: 5 },
    { name: 'CPP', rating: 4 },
    { name: 'Python', rating: 5 },
    { name: 'HTML5', rating: 5 },
    { name: 'D3JS', rating: 3 },
    { name: 'ReactJS', rating: 4 },
    { name: 'ExpressJS', rating: 4 },
    { name: 'MongoDB', rating: 4 },
    { name: 'MySQL', rating: 3 },
    { name: 'NumPy', rating: 4 },
    { name: 'Jupyter', rating: 4 },
    { name: 'TensorFlow', rating: 3 },
    { name: 'PyTorch', rating: 4 },
    { name: 'Arduino', rating: 5 },
    { name: 'Espressif', rating: 5 },
    { name: 'RaspberryPI', rating: 4 },
    { name: 'Bluetooth', rating: 3 },
]

export default function About() {
    const [moreSkills, toggleMoreSkills] = useState(false);
    const isMobile = useMediaQuery();

    const otherSkills = [[], []];
    if (!isMobile)
        skills.forEach((data, index) => otherSkills[(index % 2 === 1) * 1].push(data));
    else
        otherSkills[0] = skills;

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
            <div className={`${styles.row} ${''}`}>
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
            {moreSkills ? <div className={`${styles.row} ${styles.skillRow}`}>
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
