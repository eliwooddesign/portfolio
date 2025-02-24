'use client';

import { useState, useEffect } from 'react';

import Link from 'next/link';

import { Nav } from '@/components';
import { cssVar, cn } from '@/utils';

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

	const setCssVariables = () => {
		const headerHeight = getElementHeight(headerId) || 140;
		const captionHeight = getElementHeight(captionId) || 14.4;
		const scrolledHeaderHeight = headerHeight - captionHeight;

		cssVar('--header-height', `${headerHeight}px`);
		cssVar('--header-caption-height', `${captionHeight}px`);
		cssVar('--scrolled-header-height', `${scrolledHeaderHeight}px`);
	};

	const handleScroll = () => {
		const position = document.body.scrollTop;
		setScrollPosition(position);
	};

	useEffect(() => {
		document.body.addEventListener('scroll', handleScroll);
		setCssVariables();

		return () => {
			document.body.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header {...cn(styles.header_container)}>
			<div id={headerId} {...cn(styles.header, scrolled && styles.scrolled_header)}>
				<Link href='/' {...cn(styles.brand)}>
					<h2 {...cn(styles.title)}>Eli Wood</h2>

					<h5 id={captionId} {...cn(styles.caption, scrolled ? styles.hidden : styles.visible)}>
						Software Developer
					</h5>
				</Link>

				<div {...cn(styles.nav_container)}>
					<Nav />
				</div>
			</div>
		</header>
	);
}
