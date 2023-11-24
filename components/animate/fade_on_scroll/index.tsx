'use client';

import { useState, useEffect, PropsWithChildren } from 'react';

import styles from './style.module.css';

type Props = {};

export default function FadeOnScroll(props: PropsWithChildren<Props>) {
	const { children } = props;

	const [scrollPosition, setScrollPosition] = useState<number>(0);

	// const visibleThreshold = 0.75 * window?.innerHeight;
	// const visible = scrollPosition < visibleThreshold;

	const elementId = styles.animation;

	const handleScroll = () => {
		const element = document.getElementById(elementId);
		const position = element?.getBoundingClientRect().top;

		setScrollPosition(position || window?.innerHeight);

		console.log(position);
	};

	useEffect(() => {
		document.body.addEventListener('scroll', handleScroll);

		return () => {
			document.body.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div id={elementId} className={styles.fade_on_scroll}>
			{children}
		</div>
	);
}
