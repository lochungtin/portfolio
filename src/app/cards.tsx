import Image from 'next/image';
import skills from './skill.module.css';

export const SkillCard = ({ icon, name, score }: { icon: string, name: string, score: string }) => {
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