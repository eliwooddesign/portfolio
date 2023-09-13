import Link from 'next/link';

import { Nav } from '@/components';

import styles from './style.module.css';

export default function Header() {
	return (
		<header className={styles.header}>
			<Link href={'/'} className={styles.title}>
				<h1>Eli Wood</h1>
				<p>Designer & Developer</p>
			</Link>

			<Nav />
		</header>
	);
}
