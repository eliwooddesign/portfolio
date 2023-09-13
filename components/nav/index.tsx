import Link from 'next/link';

import styles from './style.module.css';

export default function Nav() {
	return (
		<nav className={styles.nav}>
			<h4>//</h4>

			<Link href={'/about'}>About</Link>
			<Link href={'/work'}>Work</Link>
			<Link href={'/resume'}>Resume</Link>

			<h4>Contact</h4>
		</nav>
	);
}
