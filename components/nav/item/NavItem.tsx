'use client';

import { PropsWithChildren } from 'react';
import c from 'clsx';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './NavItem.module.css';

interface Props {
	href: string;
}

export const NavItem = (props: PropsWithChildren<Props>) => {
	const { href, children } = props;

	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link href={href} className={c(styles.nav_link, isActive && styles.active)}>
			{children}
		</Link>
	);
};
