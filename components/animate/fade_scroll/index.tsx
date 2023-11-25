'use client';

import { useState, useEffect, useMemo, PropsWithChildren } from 'react';

import { classList, getKey } from '@/utils';

import styles from './style.module.css';

type Props = {
	breakpoint?: number;
	delay?: string;
};

export default function FadeUpScroll(props: PropsWithChildren<Props>) {
	const { breakpoint = 0.85, delay = '0ms', children } = props;

	const [scrollPosition, setScrollPosition] = useState<number>(window.innerHeight);

	const elementId = useMemo(() => 'animation__' + getKey(), []);

	const visibleThreshold = breakpoint * window.innerHeight;
	const visible = scrollPosition < visibleThreshold;

	const inlineStyles = {
		'transition-delay': delay
	};

	const handleScroll = () => {
		const element = document.getElementById(elementId);
		const position = element?.getBoundingClientRect().top;

		setScrollPosition(position || window.innerHeight);
	};

	useEffect(() => {
		document.body.addEventListener('scroll', handleScroll);

		return () => {
			document.body.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div id={elementId} className={classList(styles.fade_on_scroll, visible && styles.visible)} style={inlineStyles}>
			{children}
		</div>
	);
}
