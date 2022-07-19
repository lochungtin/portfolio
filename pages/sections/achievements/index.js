import ReadMore from '../../components/readmore';
import useMediaQuery from '../../utils/media';

import styles from './achievements.module.css';

const achievements = [
    {
        title: 'Hack Sheffield 6',
        time: '2020 November',
        shortdesc: 'Multi-award-winning Hackathon Project',
        longdesc: 'Built a working android mobile app with React Native in 24 hours and won best financial hack and best google cloud hack in the 6th Hack Sheffield hackathon.',
        href: '/project/unifin',
    },
    {
        title: 'MIT Innovation Academy Summer Camp',
        time: '2018 Summer',
        shortdesc: 'Entrepreneurship Summer Camp',
        longdesc: 'Selected to joined a highly intensive week summer camp hosted by the MITIA and MIT Innovation Node in Hong Kong.',
    },
    {
        title: 'Robofest GRAF',
        time: '2017 May',
        shortdesc: 'Double Robotics World Championship',
        longdesc: `Awarded World Championship and the People's Choice Award in Robofest 2017 Global Robotics Art Festival.`,
        href: '/projects/graf',
    },
    {
        title: 'Hong Kong Junior Maths Olympiad',
        time: '2015 Summer',
        shortdesc: 'Modelling Paper 1st Place',
        longdesc: 'Awarded first place in the Hong Kong Junior Maths Olympiad Modeling Paper for a paper on calculating the day of week given an arbitrary date.'
    },
];

export default function Achievements() {
    const isMobile = useMediaQuery();
    const len = achievements.length - 1;
    return (
        <section id='achievements'>
            <p className={styles.title}>{isMobile ? '' : 'Other '}Achievements</p>
            {achievements.map((data, index) =>
                <div className={`${styles.achievementItemBox} ${len === index ? styles.lastBox : ''}`} key={index}>
                    <div className={styles.horizontalP}>
                        <p className={styles.achievementTitleText}>{data.title}</p>
                        <p className={styles.timeText}>({data.time})</p>
                    </div>
                    <p className={styles.shortDescText}>{data.shortdesc}</p>
                    <p>{data.longdesc}</p>
                    <div className={styles.readmoreContainer}>
                        {data.href ? <ReadMore href={data.href} /> : null}
                    </div>
                </div>)}
        </section>
    );
}
