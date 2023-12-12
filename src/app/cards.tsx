import Image from 'next/image';
import education from './education.module.css';
import skills from './skill.module.css';

export const SkillCard = ({
    icon, name, score
}: {
    icon: string, name: string, score: string
}) => {
    return (
        <div className={skills.card}>
            <div className={skills.top}>
                <Image className={skills.icon} src={"./assets/" + icon + ".svg"} height={100} width={100} alt={name} />
                <p>{name}</p>
            </div>
            <div className={skills.indicator + " " + skills["i" + score]}></div>
        </div>
    );
}

export const EducationCard = ({
    name, loc, start, end, grade, isLeft
}: {
    name: string, loc: string, start: string, end: string, grade: string, isLeft: boolean
}) => {
    let splt: string[] = name.split(" ");
    splt.reverse();
    const title = splt.pop();
    splt.reverse();
    const name_s = splt.join(" ");

    return (
        <div className={education.card}>
            <div className={education.cover + " " + (isLeft ? education.left : education.right)}></div>
            <div className={education.border}>
                <div className={education.content}>
                    <div className={education.top}>
                        <p><span>{title}</span> {name_s}</p>
                        <p className={education.location}>{loc}</p>
                    </div>
                    <div className={education.details}>
                        <p>{start} - {end}</p>
                        <p>{grade}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}