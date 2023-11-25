import { Animate, Badge } from '@/components';

import styles from './style.module.css';

type Props = {};

export default function MyStack(props: Props) {
	return (
		<section className={styles.my_stack}>
			<Animate.FadeUpScroll>
				<h1 className={styles.headline}>My Current Stack</h1>
			</Animate.FadeUpScroll>

			<div className={styles.stack}>
				<Animate.FadeUpScroll>
					<div className={styles.row}>
						<div className={styles.row_label}>
							<Animate.FadeScroll delay='100ms'>
								<h1 className={styles.row_label_text}>FRONTEND</h1>
							</Animate.FadeScroll>
						</div>

						<Badge.TypeScript />
						<Badge.Next_js />
					</div>
				</Animate.FadeUpScroll>

				<Animate.FadeUpScroll>
					<div className={styles.row}>
						<div className={styles.row_label}>
							<Animate.FadeScroll delay='100ms'>
								<h1 className={styles.row_label_text}>BACKEND</h1>
							</Animate.FadeScroll>
						</div>

						<Badge.Node_js />
						<Badge.Express />
					</div>
				</Animate.FadeUpScroll>

				<Animate.FadeUpScroll>
					<div className={styles.row}>
						<div className={styles.row_label}>
							<Animate.FadeScroll delay='100ms'>
								<h1 className={styles.row_label_text}>DATABASE</h1>
							</Animate.FadeScroll>
						</div>

						<Badge.MySQL />
						<Badge.Sequelize />
					</div>
				</Animate.FadeUpScroll>
			</div>
		</section>
	);
}
