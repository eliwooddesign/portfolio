'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './style.module.css';

const routes = ['About', 'Work', 'Resume'];

export default function Nav() {
	const pathname: string = usePathname();

	console.log(pathname);

	return (
		<nav className={styles.nav}>
			<h4>//</h4>

			{routes.map((route) => {
				const key = Math.floor(Math.random() * 1000000);
				const slug = '/' + route.toLowerCase();

				const isHome = pathname === '/';
				const isActive = slug === pathname || (isHome && slug === '/work');

				return (
					<Link key={key} href={slug} className={isActive ? styles.active : ''}>
						{route}
					</Link>
				);
			})}

			{/* <Link href={'/about'}>About</Link>
			<Link href={'/work'}>Work</Link>
			<Link href={'/resume'}>Resume</Link> */}

			<h4>Contact</h4>
		</nav>
	);
}
