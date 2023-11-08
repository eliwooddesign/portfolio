'use client';

import { Dispatch, SetStateAction } from 'react';

import { Icons } from '@/components';
import { getKey } from '@/utils';

import styles from './style.module.css';

interface Props {
	isVisible: boolean;
	setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const closeButtonWidth = 90;

export default function NavIcon(props: Props) {
	const { isVisible, setIsVisible } = props;

	// left and right coordinates derrived from button width
	const lc = 50 - closeButtonWidth / 2;
	const rc = 50 + closeButtonWidth / 2;

	const leftLine = {
		slash: { x1: 15, y1: 100, x2: 55, y2: 0 },
		close: { x1: lc, y1: 100, x2: rc, y2: 0 }
	};

	const rightLine = {
		slash: { x1: 60, y1: 100, x2: 100, y2: 0 },
		close: { x1: rc, y1: 100, x2: lc, y2: 0 }
	};

	const animation = {
		duration: '300ms',
		fill: 'remove',
		restart: 'whenNotActive'
	};

	const lines = [leftLine, rightLine];

	return (
		<Icons.Svg>
			{lines.map((line) => {
				const key = getKey();

				const { slash, close } = line;

				return (
					<line key={key} x1={isVisible ? close.x1 : slash.x1} y1={isVisible ? close.y1 : slash.y1} x2={isVisible ? close.x2 : slash.x2} y2={isVisible ? close.y2 : slash.y2}>
						{/* <animate begin='nav_icon.click' attributeName='x1' from={isVisible ? close.x1 : slash.x1} to={isVisible ? slash.x1 : close.x1} dur={animation.duration} fill={animation.fill} restart={animation.restart} />
						<animate begin='nav_icon.click' attributeName='x2' from={isVisible ? close.x2 : slash.x2} to={isVisible ? slash.x2 : close.x2} dur={animation.duration} fill={animation.fill} restart={animation.restart} /> */}
					</line>
				);
			})}
		</Icons.Svg>
	);
}
