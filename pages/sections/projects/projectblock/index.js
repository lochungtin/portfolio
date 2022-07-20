import Image from 'next/image';

import { obj2arr } from '../../../api/firebase';
import Card from '../../../components/card';
import ReadMore from '../../../components/readmore';

import commonStyles from '../../../../styles/common.module.css';
import styles from './projectblock.module.css';

export default function ProjectBlock({ data }) {
    if (!data)
        return <div></div>

    return (
        <div className={styles.spacer}>
            <Card>
                <div className={styles.root}>
                    <p className={commonStyles.itemDetailTitle}>{data.name}</p>
                    <p className={styles.desc}>{data.desc}</p>
                    <div className={styles.tagContainer}>
                        {obj2arr(data.tags).map((tag, index) =>
                            <div className={styles.tag} key={index}>
                                <b>{tag.name}</b>
                            </div>)}
                    </div>
                    <div className={styles.readMoreContainer}>
                        <a className={styles.ghBtn} href={`https://github.com/lochungtin/${data.repo}`}>
                            <Image
                                src='/icons/socials/github.svg'
                                width={30} height={30} alt='gh'
                            />
                        </a>
                        <ReadMore href={data.href} />
                    </div>
                </div>
            </Card>
        </div>
    );
}
