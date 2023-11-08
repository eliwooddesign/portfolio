'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, redirect } from 'next/navigation';

import { Icons } from '@/components';
import { getKey } from '@/utils';

import styles from './style.module.css';

const routes = ['about', 'work', 'resume'];

export default function Nav() {
	const [isVisible, setIsVisible] = useState(false);
	const pathname: string = usePathname();

	if (pathname === '/') {
		redirect('/work');
	}

	return (
		<nav className={styles.component}>
			<div className={isVisible ? `${styles.nav} ${styles.visible}` : styles.nav}>
				<div id='nav_icon' className={styles.nav_icon} onClick={() => setIsVisible(!isVisible)}>
					<Icons.Nav isVisible={isVisible} setIsVisible={setIsVisible} />
				</div>

				<div className={styles.nav_links}>
					{routes.map((route) => {
						const slug = '/' + route;
						const isActive = slug === pathname;

						const linkClass = styles.nav_link;
						const activeLinkClass = `${linkClass} ${styles.active}`;

						const linkClassName = isActive ? activeLinkClass : linkClass;

						return (
							<Link key={getKey()} href={slug} className={linkClassName}>
								{route}
							</Link>
						);
					})}

					<h4 className={styles.nav_link}>Contact</h4>
				</div>
			</div>
		</nav>
	);
}
