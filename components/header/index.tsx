'use client';

import { useState, useEffect } from 'react';

import Link from 'next/link';

import { Nav } from '@/components';
import { addCSSVariable, classList } from '@/utils';

import styles from './style.module.css';

export default function Header() {
	const [scrollPosition, setScrollPosition] = useState<number>(0);

	const scrollThreshold = 60;
	const scrolled = scrollPosition > scrollThreshold;

	const getElementHeight = (id: string) => {
		return document.getElementById(id)?.offsetHeight;
	};

	const setCSSVariables = () => {
		const headerHeight = getElementHeight(styles.header);
		const captionHeight = getElementHeight(styles.caption);

		addCSSVariable('--header-height', `${headerHeight}px`);
		addCSSVariable('--header-caption-height', `${captionHeight}px`);
		// --scrolled-header-height set in global.css
	};

	const handleScroll = () => {
		const position = window.scrollY;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		setCSSVariables();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header id={styles.header} className={classList(styles.header, scrolled && styles.scrolled_header)}>
			<Link href={'/'} className={styles.title}>
				<h2>Eli Wood</h2>

				<p id={styles.caption} className={classList(styles.caption, scrolled && styles.hidden)}>
					Designer & Developer
				</p>
			</Link>

			<Nav.Primary />
		</header>
	);
}
