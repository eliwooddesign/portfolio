'use client';

import { useState, useEffect } from 'react';

import Link from 'next/link';

import { Nav } from '@/components';
import { addCSSVariable, classList } from '@/utils';

import styles from './style.module.css';

const headerId = 'site_header';
const captionId = 'site_header_caption';

export default function Header() {
	const [scrollPosition, setScrollPosition] = useState<number>(0);

	const scrollThreshold = 60;
	const scrolled = scrollPosition > scrollThreshold;

	const getElementHeight = (id: string) => {
		return document.getElementById(id)?.offsetHeight;
	};

	const setCSSVariables = () => {
		const headerHeight = getElementHeight(headerId) || 140;
		const captionHeight = getElementHeight(captionId) || 14.4;
		const scrolledHeaderHeight = headerHeight - captionHeight;

		addCSSVariable('--header-height', `${headerHeight}px`);
		addCSSVariable('--header-caption-height', `${captionHeight}px`);
		addCSSVariable('--scrolled-header-height', `${scrolledHeaderHeight}px`);
	};

	const handleScroll = () => {
		const position = document.body.scrollTop;
		setScrollPosition(position);
	};

	useEffect(() => {
		document.body.addEventListener('scroll', handleScroll);
		setCSSVariables();

		return () => {
			document.body.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header className={styles.header_container}>
			<div id={headerId} className={classList(styles.header, scrolled && styles.scrolled_header)}>
				<Link href={'/'} className={styles.brand}>
					<h2 className={styles.title}>Eli Wood</h2>

					<h5 id={captionId} className={classList(styles.caption, scrolled ? styles.hidden : styles.visible)}>
						Designer & Developer
					</h5>
				</Link>

				<div className={styles.nav_container}>
					<Nav.Primary />
				</div>
			</div>
		</header>
	);
}
