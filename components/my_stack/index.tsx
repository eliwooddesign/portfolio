import { Animate, Badge } from '@/components';

import styles from './style.module.css';

type Props = {};

const { Fade, FadeUp } = Animate;

export default function MyStack(props: Props) {
	return (
		<section className={styles.my_stack}>
			<FadeUp>
				<h1 className={styles.headline}>My Current Stack</h1>
			</FadeUp>

			<div className={styles.stack}>
				<FadeUp>
					<div className={styles.row}>
						<div className={styles.row_label}>
							<Fade speed={500} delay={100}>
								<h1 className={styles.row_label_text}>FRONTEND</h1>
							</Fade>
						</div>

						<Badge.TypeScript />
						<Badge.Next_js />
					</div>
				</FadeUp>

				<FadeUp>
					<div className={styles.row}>
						<div className={styles.row_label}>
							<Fade speed={500} delay={100}>
								<h1 className={styles.row_label_text}>BACKEND</h1>
							</Fade>
						</div>

						<Badge.Node_js />
						<Badge.Express />
					</div>
				</FadeUp>

				<FadeUp>
					<div className={styles.row}>
						<div className={styles.row_label}>
							<Fade speed={500} delay={100}>
								<h1 className={styles.row_label_text}>DATABASE</h1>
							</Fade>
						</div>

						<Badge.MySQL />
						<Badge.Sequelize />
					</div>
				</FadeUp>
			</div>
		</section>
	);
}
