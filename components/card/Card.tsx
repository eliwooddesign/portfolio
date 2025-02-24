import { PropsWithChildren } from 'react';
import clsx from 'clsx';

import styles from './Card.module.css';

interface Props {
	className?: string;
}

export function Card({ className = '', children }: PropsWithChildren<Props>) {
	return <div className={clsx(styles.card, className)}>{children}</div>;
}
