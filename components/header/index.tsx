'use client';

import { useState, useEffect } from 'react';

import Link from 'next/link';

import { Nav } from '@/components';

import styles from './style.module.css';

const scrollThreshold = 60;
const headerId = 'site_header';
const captionId = 'site_header_caption';

export default function Header() {
	const [scrollPosition, setScrollPosition] = useState<number>(0);

	const setCSSVariables = () => {
		const htmlElement = document.querySelector('html');
		if (!htmlElement) return;

		const headerHeight = document.getElementById(headerId)?.offsetHeight;
		if (!headerHeight) return;

		const captionHeight = document.getElementById(captionId)?.offsetHeight;
		if (!captionHeight) return;

		htmlElement?.style.setProperty('--header-height', `${headerHeight}px`);
		htmlElement?.style.setProperty('--header-caption-height', `${captionHeight}px`);
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
		<header id={headerId} className={`${styles.header} ${scrollPosition > scrollThreshold ? styles.scrolled_header : ''}`}>
			<Link href={'/'} className={styles.title}>
				<h1>Eli Wood</h1>
				<p id={captionId}>Designer & Developer</p>
			</Link>

			<Nav />
		</header>
	);
}
