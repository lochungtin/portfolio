import { obj2arr } from '../../api/firebase';
import ReadMore from '../../components/readmore';
import useMediaQuery from '../../utils/media';
import ProjectBlock from './projectblock';

import commonStyles from '../../../styles/common.module.css';
import styles from './projects.module.css';

export default function Projects({ pinned }) {
    const isMobile = useMediaQuery();

    if (!pinned)
        return <div></div>;

    const projects = [[], []];
    if (isMobile)
        projects[0] = obj2arr(pinned);
    else
        obj2arr(pinned).forEach((data, index) => projects[(index % 2 === 1) * 1].push(data));

    return (
        <section id='projects'>
            <p className={styles.title}>Projects</p>
            <div className={`${commonStyles.halfRow} ${styles.projectRow}`}>
                <div>
                    {projects[0].map((data, index) =>
                        <ProjectBlock data={data} key={index} />)}
                </div>
                {!isMobile ? <div>
                    {projects[1].map((data, index) =>
                        <ProjectBlock data={data} key={index} />)}
                </div> : null}
            </div>
            <ReadMore href='/projects' textOverride='All Projects' />
        </section>
    );
}
