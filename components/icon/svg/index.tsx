import { PropsWithChildren } from 'react';

import styles from './style.module.css';

const padding = 5;

const viewBox = {
	x1: 0 - padding,
	y1: 0 - padding,
	x2: 100 + padding * 2,
	y2: 100 + padding * 2
};

interface Props {
	id?: string;
	className?: string;
	onClick?: () => any;
}

export default function Svg(props: PropsWithChildren<Props>) {
	const { id = '', className = '', onClick = () => {}, children } = props;

	return (
		<svg id={id} className={`${styles.icon} ${className}`} onClick={onClick} viewBox={`${viewBox.x1} ${viewBox.y1} ${viewBox.x2} ${viewBox.y2}`} xmlns='http://www.w3.org/2000/svg'>
			{children}
		</svg>
	);
}
