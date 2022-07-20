import ReadMore from '../../components/readmore';
import useMediaQuery from '../../utils/media';

import commonStyles from '../../../styles/common.module.css';
import styles from './achievements.module.css';

export default function Achievements({ data }) {
    const isMobile = useMediaQuery();

    if (data === null)
        return <div></div>;

    const sorted = Object.entries(data).sort(([aK, aV], [bK, bV]) => aV.sort - bV.sort).map(([k, v]) => ({ name: k, ...v }));
    const len = sorted.length - 1;

    return (
        <section id='achievements'>
            <p className={styles.title}>{isMobile ? '' : 'Other '}Achievements</p>
            {sorted.map((data, index) =>
                <div className={len === index ? styles.lastBox : commonStyles.itemDetailBox} key={index}>
                    <div className={commonStyles.horizontalParagraphs}>
                        <p className={commonStyles.itemDetailTitle}>{data.name}</p>
                        <p className={styles.timeText}>({data.time})</p>
                    </div>
                    <b>{data.desc}</b>
                    <p>{data.long}</p>
                    <div className={styles.readmoreContainer}>
                        {data.href ? <ReadMore href={data.href} /> : null}
                    </div>
                </div>)}
        </section>
    );
}
