import styles from './binaryselector.module.css';

export default function BinarySelector({ val0, val1, selection, onClick }) {
    return (
        <div className={styles.root}>
            <button className={`${styles.selection} ${selection === 0 ? styles.selectedDiv : ''}`} onClick={onClick}>
                <p className={`${selection === 0 ? styles.selectedText : ''}`}>{val0}</p>
            </button>
            <button className={`${styles.selection} ${selection === 1 ? styles.selectedDiv : ''}`} onClick={onClick}>
                <p className={`${selection === 1 ? styles.selectedText : ''}`}>{val1}</p>
            </button>
        </div>
    );
}
