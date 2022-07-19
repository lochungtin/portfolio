import ReadMore from '../../components/readmore';
import useMediaQuery from '../../utils/media';

import styles from './achievements.module.css';

export default function Achievements() {
    const isMobile = useMediaQuery();
    return (
        <section id='achievements'>
            <p className={styles.title}>{isMobile ? '' : 'Other '}Achievements</p>
            <ReadMore href=''/>
        </section>
    );
}
