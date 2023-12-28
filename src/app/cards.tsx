import Image from 'next/image';
import achievements from './achievement.module.css';
import education from './education.module.css';
import project from './project.module.css';
import skills from './skill.module.css';

export const SkillCard = ({
    icon, name, score
}: {
    icon: string, name: string, score: string
}) => {
    return (
        <div className={skills.card}>
            <div className={skills.top}>
                <Image className={skills.icon} src={"./assets/" + icon + ".svg"} height={100} width={100} alt="icon" />
                <p>{name}</p>
            </div>
            <div className={skills.indicator + " " + skills["i" + score]}></div>
        </div>
    );
}

export const ProjectCard = ({
    otitle, sub, icon1, icon2, icon3, cTitle, text, gh, doc,
}: {
    otitle: string,
    sub: string,
    icon1: string,
    icon2?: string,
    icon3?: string,
    cTitle: string,
    text: string,
    gh?: string,
    doc?: string,
}) => {
    return (
        <div className={project.card}>
            <div className={project.dots}></div>
            <div className={project.overlay}>
                <p className={project.oTitle}>{otitle}</p>
                <p className={project.subtitle}>{sub}</p>
                <div className={project.icons}>
                    {icon1 ? <Image className={project.icon} src={"assets/" + icon1 + ".svg"} height={100} width={100} alt="icon" /> : <></>}
                    {icon2 ? <Image className={project.icon} src={"assets/" + icon2 + ".svg"} height={100} width={100} alt="icon" /> : <></>}
                    {icon3 ? <Image className={project.icon} src={"assets/" + icon3 + ".svg"} height={100} width={100} alt="icon" /> : <></>}
                </div>
            </div>
            <div className={project.content}>
                <p className={project.text}><span className={project.ctitle}>{cTitle}</span> {text}</p>
                <div className={project.actions}>
                    <a className={gh ? "" : project.disabled} href={gh}><Image className={project.icon} src="assets/github.svg" height={100} width={100} alt="icon" /></a>
                    <a className={project.action} href={doc}>Learn More</a>
                </div>
            </div>
        </div>
    );
}

export const EducationCard = ({
    name, loc, start, end, grade, isLeft
}: {
    name: string, loc: string, start: string, end: string, grade?: string, isLeft: boolean
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
                        <p>{grade ? grade : ""}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const AchievementCard = ({
    date, title, sub, text
}: {
    date: string, title: string, sub: string, text: string
}) => {
    return (
        <div className={achievements.card}>
            <div className={achievements.shape}></div>
            <p className={achievements.date}>{date}</p>
            <p className={achievements.title}>{title}</p>
            <p className={achievements.subtitle}>{sub}</p>
            <p className={achievements.text}>{text}</p>
        </div>
    );
}