'use client';

import { useState } from 'react';

import { Icons, Nav } from '@/components';
import { classList } from '@/utils';

import styles from './style.module.css';

export default function Primary() {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<nav className={styles.component}>
			<Icons.Nav id={styles.nav_icon} className={styles.nav_icon} onClick={() => setIsVisible(!isVisible)} isVisible={isVisible} />

			<div className={classList(styles.nav, isVisible && styles.visible)}>
				<div className={styles.nav_links}>
					<Nav.Item href={'/'}>Work</Nav.Item>
					<Nav.Item href={'/about'}>About</Nav.Item>
					<Nav.Item href={'/resume'}>Resume</Nav.Item>

					<h4 className={styles.nav_link}>Contact</h4>
				</div>
			</div>
		</nav>
	);
}
