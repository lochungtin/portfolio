import ReadMore from '../../components/readmore';

import styles from './projects.module.css'

export default function Projects() {
    return (
        <section id='projects'>
            <p className={styles.title}>Projects</p>
            <ReadMore href='/projects' textOverride='All Projects'/>
        </section>
    );
}
