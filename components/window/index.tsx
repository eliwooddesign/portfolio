import styles from './style.module.css';

type Props = {
	title?: string;
	caption: string;
	children: React.ReactNode;
};

// title bar button colors
// red: #fc4645
// yellow: #fcb025
// green: #29c231

export default function Window({
	// prettier-ignore
	title,
	caption,
	children
}: Props) {
	return (
		<figure className={styles.frame}>
			<div className={styles.title_bar}>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 88 48' width={88} height={48} opacity={1} className={styles.frame_buttons}>
					<mask id='frame_button_mask'>
						<rect width='88' height='48' fill='white' />

						<circle cx='24' cy='24' r='6' fill='gray' />
						<circle cx='44' cy='24' r='6' fill='gray' />
						<circle cx='64' cy='24' r='6' fill='gray' />
					</mask>

					<rect width='88' height='48' fill='inherit' mask='url(#frame_button_mask)' className={styles.frame_buttons_background} />
				</svg>

				{title ? <p className={styles.title}>{title}</p> : null}
			</div>

			<div className={styles.body}>{children}</div>

			<figcaption>{caption}</figcaption>
		</figure>
	);
}
