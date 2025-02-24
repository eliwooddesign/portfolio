import { Experience, Skills } from './_sections';

import styles from './style.module.css';

export default function Resume() {
	return (
		<main className={styles.main}>
			<Skills />
			<Experience />
		</main>
	);
}
