import sections from './_sections';
const { UserPersona } = sections;

import styles from './style.module.css';

export default function MavenGroup() {
	return (
		<main className={styles.page}>
			<UserPersona />
		</main>
	);
}
