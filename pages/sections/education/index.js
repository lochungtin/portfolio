import { useState } from 'react';

import BinarySelector from '../../components/binaryselector';

import commonStyles from '../../../styles/common.module.css';
import styles from './education.module.css';

export default function Education({ online, formal }) {
    const [selection, setSelection] = useState(1);

    let data;
    if (selection) {
        if (!formal)
            return <div></div>;

        data = Object.entries(formal);
    }
    else {
        if (!online)
            return <div></div>;

        data = Object.entries(online);
    }

    const sorted = data.sort(([aK, aV], [bK, bV]) => aV.sort - bV.sort).map(([k, v]) => ({ name: k, ...v }));

    return (
        <section id='education'>
            <p className={styles.title}>Education</p>
            <BinarySelector
                selection={selection}
                val0='Online Courses' val1='Formal Education'
                onClick={() => setSelection((selection + 1) % 2)}
            />
            {sorted.map((data, index) =>
                <div className={commonStyles.itemDetailBox} key={index}>
                    <div className={commonStyles.horizontalParagraphs}>
                        <p className={styles.titleContainer}>
                            <span className={commonStyles.itemDetailTitle}>{data.name}</span>
                            {` @ ${data.loc}`}
                        </p>
                        <p className={styles.eductationTimeText}><span>({data.time})</span></p>
                    </div>
                    <p className={styles.educationScoreText}>
                        {'Qualification: '}
                        <b>{data.qual}</b>
                    </p>
                </div>)}
        </section>
    );
}
