import textStyles from '../../../styles/text.module.css';
import styles from './binaryselector.module.css';

export default function BinarySelector({ val0, val1, selection, onClick, style }) {
    const s0 = selection === 0;
    const s1 = !s0;
    
    return (
        <div className={`${styles.root} ${style}`}>
            <button className={`${styles.selection} ${s0 ? styles.selectedDiv : ''}`} onClick={onClick}>
                <p className={`${s0 ? textStyles.white : ''}`}>{val0}</p>
            </button>
            <button className={`${styles.selection} ${s1 ? styles.selectedDiv : ''}`} onClick={onClick}>
                <p className={`${s1 ? textStyles.white : ''}`}>{val1}</p>
            </button>
        </div>
    );
}
