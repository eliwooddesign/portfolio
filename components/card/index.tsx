import { PropsWithChildren } from 'react';

import { classList } from '@/utils';

import styles from './style.module.css';

interface Props {
	className?: string;
}

export default function Card({
	// prettier-ignore
	className = '',
	children
}: PropsWithChildren<Props>) {
	return <div className={classList(styles.card, className)}>{children}</div>;
}
