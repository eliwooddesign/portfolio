'use client';

import { useState } from 'react';
import clsx from 'clsx';

import { Icon } from '@/components';
import { NavItem } from './item/NavItem';

import styles from './Nav.module.css';

export const Nav = () => {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<nav className={styles.component}>
			<Icon.Nav id={styles.nav_icon} className={styles.nav_icon} onClick={() => setIsVisible(!isVisible)} isVisible={isVisible} />

			<div className={clsx(styles.nav, isVisible && styles.visible)}>
				<div className={styles.nav_links}>
					<NavItem href={'/work'}>Work</NavItem>
					<NavItem href={'/resume'}>Resume</NavItem>

					<h4 className={styles.nav_link}>Contact</h4>
				</div>
			</div>
		</nav>
	);
};
