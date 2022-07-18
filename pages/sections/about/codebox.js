import { useEffect, useState } from 'react';

import styles from './about.module.css';

export default function Codebox() {
    const [age, setAge] = useState(`"Loading ..."`);

    useEffect(() => {
        setInterval(() => {
            setAge(`${((new Date().getTime() / 100000) - 10083744) / 315360}`.substring(0, 11));
        }, 1000);
    }, []);

    return (
        <div className={styles.codeBox}>
            <pre className={styles.codeText}>
                <code>const</code>{` person = {\n    `}
                <span>name</span>{`: "Timothy Lo",\n    `}
                <span>age</span>{`: ${age},\n    `}
                <span>location</span>{`: "London",\n    `}
                <span>abilities</span>{`: [\n\t`}
                {`"Machine Learning"\n\t`}
                {`"Full Stack Dev"\n\t`}
                {`"Mobile Dev",\n    `}
                {`],\n};`}
            </pre>
        </div>
    );
}
