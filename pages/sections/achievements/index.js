import { obj2arr } from '../../api/firebase';
import ReadMore from '../../components/readmore';
import useMediaQuery from '../../utils/media';

import commonStyles from '../../../styles/common.module.css';
import textStyles from '../../../styles/text.module.css';
import styles from './achievements.module.css';

export default function Achievements({ data }) {
    const isMobile = useMediaQuery();

    if (!data)
        return <div></div>;

    const sorted = obj2arr(data);
    const len = sorted.length - 1;

    return (
        <section id='achievements'>
            <p className={`${textStyles.sectionTitle} ${textStyles.grey}`}>
                {isMobile ? 'Achievements' : 'Other Achievements'}
            </p>
            {sorted.map((data, index) =>
                <div className={len === index ? styles.lastBox : commonStyles.itemDetailBox} key={index}>
                    <div className={commonStyles.horizontalParagraphs}>
                        <p className={commonStyles.itemDetailTitle}>{data.name}</p>
                        <p className={styles.timeText}>({data.time})</p>
                    </div>
                    <b>{data.desc}</b>
                    <p>{data.long}</p>
                    {data.href ?
                        <ReadMore href={data.href} style={styles.readMore} /> : null}
                </div>)}
        </section>
    );
}
