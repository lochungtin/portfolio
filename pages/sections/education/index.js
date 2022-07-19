import { useState } from 'react';

import BinarySelector from '../../components/binaryselector';

import commonStyles from '../../../styles/common.module.css';
import styles from './education.module.css';

const formal = [
    {
        title: 'MRes AI and ML',
        location: `Imperial College London`,
        time: '2022 - Current',
        score: 'Pending',
    },
    {
        title: 'BSc Computer Science',
        location: `King's College London`,
        time: '2019 - 2022',
        score: '79 (First Class Honours)',
    },
    {
        title: `IBDP`,
        location: 'HKCCCU Logos Academy',
        time: '2017 - 2019',
        score: '36/45',
    },
]

const online = [
    {
        title: 'Reinforcement Learning Specialisation',
        location: 'University of Alberta',
        time: '2021 Summer',
        score: 'Certificate of Participation',
    },
    {
        title: 'Intro to TensorFlow for Deep Learning',
        location: 'TensorFlow',
        time: '2021 Summer',
        score: 'n/a',
    },
    {
        title: `CS50's Mobile App Development with React Native`,
        location: 'Harvard University',
        time: '2020 Summer',
        score: 'Certificate of Participation',
    },
    {
        title: 'Neural Networks and Deep Learning',
        location: 'deeplearning.ai',
        time: '2020 Summer',
        score: 'Certificate of Participation',
    },
]

export default function Education() {
    const [selection, setSelection] = useState(1);

    return (
        <section id='education'>
            <p className={styles.title}>Education</p>
            <BinarySelector
                selection={selection}
                val0='Online Courses' val1='Formal Education'
                onClick={() => setSelection((selection + 1) % 2)}
            />
            {(selection ? formal : online).map((data, index) =>
                <div className={commonStyles.itemDetailBox} key={index}>
                    <div className={commonStyles.horizontalParagraphs}>
                        <p className={styles.titleContainer}>
                            <span className={commonStyles.itemDetailTitle}>{data.title}</span>
                            {` @ ${data.location}`}
                        </p>
                        <p className={styles.eductationTimeText}><span>({data.time})</span></p>
                    </div>
                    <p className={styles.educationScoreText}>
                        {'Qualification: '}
                        <b>{data.score}</b>
                    </p>
                </div>)}
        </section>
    );
}
