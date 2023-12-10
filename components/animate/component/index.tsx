'use client';

import { useState, useEffect, useMemo } from 'react';

import { classList, getKey } from '@/utils';

import styles from './style.module.css';

export type Props = {
	animation?: 'fade' | 'fade-up';
	speed?: number; // ms
	timing?: 'ease' | 'ease-in' | 'ease-out' | 'eas-in-out' | 'inherit';
	delay?: number; // ms
	breakpoint?: number; // vh
	children: React.ReactNode;
};

export default function Fade({
	// prettier-ignore
	animation = 'fade',
	speed = 500,
	timing = 'ease-out',
	delay = 0,
	breakpoint = 85,
	children
}: Props) {
	const [scrollPosition, setScrollPosition] = useState<number>(0);

	const elementId = useMemo(() => 'animation__' + getKey(), []);

	const visibleThreshold = (breakpoint / 100) * window.innerHeight;
	const visible = scrollPosition < visibleThreshold;

	const animationClass = styles[animation];
	const visibleClass = styles[animation + '-visible'];

	useEffect(() => {
		const handleScroll = () => {
			const element = document.getElementById(elementId);
			const position = element?.getBoundingClientRect().top;

			setScrollPosition(position || window.innerHeight);
		};

		document.body.addEventListener('scroll', handleScroll);
		handleScroll();

		return () => {
			document.body.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const inlineStyles = {
		transitionDuration: `${speed}ms`,
		transitionTimingFunction: timing,
		transitionDelay: `${delay}ms`
	};

	return (
		<div id={elementId} className={classList(styles.animate, animationClass, visible && visibleClass)} style={inlineStyles}>
			{children}
		</div>
	);
}
