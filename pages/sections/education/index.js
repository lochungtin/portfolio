import { useState } from 'react';

import { obj2arr } from '../../api/firebase';
import BinarySelector from '../../components/binaryselector';

import layoutStyles from '../../../styles/layout.module.css';
import textStyles from '../../../styles/text.module.css';
import styles from './education.module.css';

export default function Education({ online, formal }) {
    const [selection, setSelection] = useState(1);

    if (!formal || !online)
        return <div></div>;

    return (
        <section id='education'>
            <p className={`${textStyles.sectionTitle} ${textStyles.grey}`}>
                <b>Education</b>
            </p>
            <BinarySelector
                selection={selection}
                val0='Online Courses' val1='Formal Education'
                onClick={() => setSelection((selection + 1) % 2)}
                style={styles.selector}
            />
            {obj2arr(selection ? formal : online).map((data, index) =>
                <div className={layoutStyles.itemDetailBox} key={index}>
                    <div className={layoutStyles.horizontalParagraphs}>
                        <p className={styles.titleContainer}>
                            <span className={textStyles.itemDetailTitle}>
                                <b>{data.name}</b>
                            </span>
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
