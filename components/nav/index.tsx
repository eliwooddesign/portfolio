'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, redirect } from 'next/navigation';

import { Icons } from '@/components';
import { getKey } from '@/utils';

import styles from './style.module.css';

const routes = ['about', 'work', 'resume'];

export default function Nav() {
	const [isActive, setIsActive] = useState(false);
	const pathname: string = usePathname();

	if (pathname === '/') {
		redirect('/work');
	}

	return (
		<nav className={styles.nav}>
			<Icons.Nav isActive={isActive} setIsActive={setIsActive} />

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
