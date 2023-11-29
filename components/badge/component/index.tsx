import Image, { StaticImageData } from 'next/image';

import styles from './style.module.css';

type Props = {
	image: StaticImageData;
	label: string;
};

export default function Component(props: Props) {
	const { image, label } = props;

	return (
		<div className={styles.badge_container}>
			<Image src={image} alt={`${label} badge`} className={styles.badge_image} />
			{label && <h5 className={styles.badge_label}>{label}</h5>}
		</div>
	);
}
