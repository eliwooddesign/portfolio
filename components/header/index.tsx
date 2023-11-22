'use client';

import { useState, useEffect } from 'react';

import Link from 'next/link';

import { Nav } from '@/components';
import { addCSSVariable, classList, getKey } from '@/utils';

import styles from './style.module.css';

export default function Header() {
	const [scrollPosition, setScrollPosition] = useState<number>(0);

	const scrollThreshold = 60;
	const scrolled = scrollPosition > scrollThreshold;

	const headerId = 'header__' + getKey();
	const captionId = 'header_caption__' + getKey();

	const getElementHeight = (id: string) => {
		return document.getElementById(id)?.offsetHeight;
	};

	const setCSSVariables = () => {
		const headerHeight = getElementHeight(headerId) || 140;
		const captionHeight = getElementHeight(captionId) || 14.4;
		const scrolledHeaderHeight = headerHeight - captionHeight;

		addCSSVariable('--header-height', `${headerHeight}px`);
		addCSSVariable('--scrolled-header-height', `${scrolledHeaderHeight}px`);
	};

	const handleScroll = () => {
		const position = window.scrollY;
		setScrollPosition(position);

		console.log(scrolled, position);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		setCSSVariables();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header className={styles.header_container}>
			<div id={headerId} className={classList(styles.header, scrolled && styles.scrolled_header)}>
				<Link href={'/'} className={styles.title}>
					<h2>Eli Wood</h2>

					<h5 id={captionId} className={classList(styles.caption, scrolled && styles.hidden)}>
						Designer & Developer
					</h5>
				</Link>

				<Nav.Primary />
			</div>
		</header>
	);
}
