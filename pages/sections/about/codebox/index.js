import { useEffect, useState } from 'react';

import Card from '../../../components/card';

import styles from './codebox.module.css';

export default function Codebox() {
    const [age, setAge] = useState(`"Loading ..."`);

    useEffect(() => {
        setInterval(() => {
            setAge(`${((new Date().getTime() / 100000) - 10083744) / 315360}`.substring(0, 11));
        }, 1000);
    }, []);

    return (
        <Card style={styles.root}>
            <pre className={styles.text}>
                <code>const</code>{` person = {\n    `}
                <span>name</span>{`: "Timothy Lo",\n    `}
                <span>age</span>{`: `}<code>{`${age}`}</code>{`,\n    `}
                <span>location</span>{`: "London",\n    `}
                <span>abilities</span>{`: [\n\t`}
                {`"Machine Learning"\n\t`}
                {`"Full Stack Dev"\n\t`}
                {`"Mobile Dev",\n    `}
                {`],\n};`}
            </pre>
        </Card>
    );
}
