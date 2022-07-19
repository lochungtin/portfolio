import Image from 'next/image';
import styles from './skilldisplay.module.css';

export default function SkillDisplay({ data }) {
    const name = data.name || '';

    const src = `/icons/tech/${name.toLowerCase()}.svg`;
    return (
        <div className={styles.spacer}>
            <div className={styles.root}>
                <Image src={src} width={20} height={20} alt={name} />
                <p>{name}</p>
                <div className={styles.dotContainer}>
                    {(new Array(data.rating).fill(1)).map((d, i) => <div className={styles.marker} key={i}></div>)}
                </div>
            </div>
        </div>
    )
}
