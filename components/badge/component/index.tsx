import Image, { StaticImageData } from 'next/image';

import { cn } from '@/utils';

import styles from './style.module.css';

export type Props = {
	image?: StaticImageData | string;
	label?: string;
	className?: string;
};

export default function Component({
	// prettier-ignore
	image = '',
	label = '',
	className = ''
}: Props) {
	return (
		<div {...cn(styles.badge_container, className)}>
			<Image src={image} alt={`${label} badge`} className={styles.badge_image} />
			{label && <h5 className={styles.badge_label}>{label}</h5>}
		</div>
	);
}
