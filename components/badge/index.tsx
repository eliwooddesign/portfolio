import Image from 'next/image';

import { Icons } from '@/components';

import styles from './style.module.css';

type Props = {
	name: string;
	label?: boolean;
};

export default function Badge(props: Props) {
	const { name, label = true } = props;
	const { badges } = Icons;

	// file names are lowercase
	// underscore represents a space
	// double underscore represents a period
	const fileName = name.toLowerCase().replaceAll('.', '__').replaceAll(' ', '_');

	// typescript error
	// @ts-ignore: expression of type 'string' can't be used to index
	const source: any = badges[fileName];

	const altText = `${name} badge`;

	return (
		<div className={styles.badge_container}>
			<Image src={source || ''} alt={altText || 'badge'} className={styles.badge} />
			{label && <p>{name}</p>}
		</div>
	);
}
