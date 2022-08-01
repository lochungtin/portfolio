import styles from './card.module.css';

export default function Card({ children, style }) {
	return <div className={`${styles.card} ${style}`}>{children}</div>;
}
