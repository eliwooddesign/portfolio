import { classList } from '@/utils';

import styles from './style.module.css';

interface Props {
	className?: string;
	children: React.ReactNode;
}

export default function Section({ className = '', children }: Props) {
	return <section className={classList(styles.section, className)}>{children}</section>;
}
