import { useState } from 'react';

import BinarySelector from '../../components/binaryselector';

import styles from './education.module.css';

export default function Education() {
    const [selection, setSelection] = useState(1);

    return (
        <section id='education'>
            <p className={styles.title}>Education</p>
            <BinarySelector
                val0='Online Courses'
                val1='Formal Education'
                selection={selection}
                onClick={() => setSelection((selection + 1) % 2)}
            />
            {selection ? <div>

            </div> : <div>
            </div>}
        </section>
    );
}
