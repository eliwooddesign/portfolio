'use client';

import { Dispatch, SetStateAction } from 'react';

import { getKey } from '@/utils';

import styles from './style.module.css';

interface Props {
	isActive: boolean;
	setIsActive: Dispatch<SetStateAction<boolean>>;
}

export default function Nav(props: Props) {
	const { isActive, setIsActive } = props;

	return (
		<svg className={styles.icon} viewBox='-5 -5 110 110' xmlns='http://www.w3.org/2000/svg'>
			<line id={styles.line_1} x1='15' y1='100' x2='55' y2='0' stroke='white' />
			<line id={styles.line_2} x1='60' y1='100' x2='100' y2='0' stroke='white' />
			<animate attributeName='x2' from='100' to='0' dur='2s' repeatCount='indefinite' />
		</svg>
	);
}
