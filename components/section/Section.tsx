import { PropsWithChildren } from 'react';
import clsx from 'clsx';

import styles from './Section.module.css';

interface Props extends PropsWithChildren {
	className?: string;
}

export function Section({ className = '', children }: Props) {
	return <section className={clsx(styles.section, className)}>{children}</section>;
}
