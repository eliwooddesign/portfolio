import sections from './_sections';
const { Experience, Skills } = sections;

import styles from './style.module.css';

export default function Resume() {
	return (
		<main className={styles.main}>
			<Skills />
			<Experience />
		</main>
	);
}
