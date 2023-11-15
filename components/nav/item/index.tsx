import { PropsWithChildren } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { classList } from '@/utils';

import styles from './style.module.css';

interface Props {
	href: string;
}

export default function Item(props: PropsWithChildren<Props>) {
	const { href, children } = props;

	const pathname: string = usePathname();
	const isActive = pathname === href;

	return (
		<Link href={href} className={classList(styles.nav_link, isActive && styles.active)}>
			{children}
		</Link>
	);
}
