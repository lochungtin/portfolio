import { obj2arr } from '../../api/firebase';
import ReadMore from '../../components/readmore';
import useMediaQuery from '../../utils/media';
import ProjectBlock from './projectblock';

import commonStyles from '../../../styles/common.module.css';
import styles from './projects.module.css';

const pinned = {
    "Undergrad Final Year Project": {
        "tags": {
            "Temporal Difference Learning": 0,
            "Genetic Algorithms": 1,
        },
        "repo": "KCL6CCS3PRJ",
        "href": "/projects/fyp",
        "desc": "Comparing temporal difference reinforcement learning with genetic algorithms by helping ghosts more efficiently catch Pacman.",
        "sort": 0,
    },
    "Project Expedite": {
        "tags": {
            "Puzzle Game Solver": 0,
            "Algorithms": 1,
        },
        "repo": "Expedite",
        "href": "/projects/expedite",
        "desc": "Developing efficient and robust algorithms to beat classic puzzles games as fast as possible.",
        "sort": 1,
    },
    "Project FullFrame": {
        "tags": {
            "Web Development": 0,
            "10 Frameworks": 1,
        },
        "repo": "FullFrame",
        "href": "/projects/fullframe",
        "desc": "Testing and evaluating 10 unique modern web development frameworks by building the same ToDo app.",
        "sort": 2,
    },
    "CoinControl": {
        "tags": {
            "Money Management App": 0,
            "React Native": 1,
        },
        "repo": "CoinControl",
        "href": "/projects/coincontrol",
        "desc": "A money management mobile application to better record and keep track of your finances and spendings.",
        "sort": 3,
    },
};

export default function Projects({ }) {
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
            <div className={`${commonStyles.halfRow} ${''}`}>
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
