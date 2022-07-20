import Image from 'next/image';

import styles from './skilldisplay.module.css';

export default function SkillDisplay({ data }) {
    if (!data)
        return <div></div>

    const src = `/icons/tech/${data.name.toLowerCase()}.svg`;
    return (
        <div className={styles.spacer}>
            <div className={styles.root}>
                <Image src={src} width={20} height={20} alt={data.name} />
                <p>{data.name}</p>
                <div className={styles.dotContainer}>
                    {(new Array(data.lvl).fill(1)).map((d, i) => 
                        <div className={styles.marker} key={i}></div>)}
                </div>
            </div>
        </div>
    );
}
