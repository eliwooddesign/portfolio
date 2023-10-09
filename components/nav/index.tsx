'use client';

import Link from 'next/link';
import { usePathname, redirect } from 'next/navigation';

import { getKey } from '@/utils';

import styles from './style.module.css';

const routes = ['about', 'work', 'resume'];

export default function Nav() {
	const pathname: string = usePathname();

	if (pathname === '/') {
		redirect('/work');
	}

	return (
		<nav className={styles.nav}>
			<h4>//</h4>

			{routes.map((route) => {
				const slug = '/' + route;
				const isActive = slug === pathname;

				return isActive ? (
					<h4 key={getKey()} className={styles.active}>
						{route}
					</h4>
				) : (
					<Link key={getKey()} href={slug}>
						{route}
					</Link>
				);
			})}

			<h4>Contact</h4>
		</nav>
	);
}
