import styles from './filtertag.module.css';

export default function FilterTag({ tag, tagKey, checked, handleToggle }) {
	return (
		<label className={styles.checkmarkContainer} onChange={() => handleToggle(tagKey)}>
			<div className={styles.tagFilterTag}>
				<p className={styles.filterTagText}>{tag}</p>
			</div>
			<input type='checkbox' checked={checked} />
			<span className={styles.checkmark}></span>
		</label>
	);
}
