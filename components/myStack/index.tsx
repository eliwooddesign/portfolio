import { Badge, Icons } from '@/components';

import styles from './style.module.css';

type Props = {};

export default function Stack(props: Props) {
	return (
		<section className={styles.my_stack}>
			<h1 className={styles.headline}>My Current Stack</h1>

			<div className={styles.stack}>
				<div className={styles.row}>
					<div className={styles.row_label}>
						<h1 className={styles.row_label_text}>FRONTEND</h1>
					</div>

					<Badge name='TypeScript' />
					<Badge name='Next.js' />
				</div>

				<div className={styles.row}>
					<div className={styles.row_label}>
						<h1 className={styles.row_label_text}>BACKEND</h1>
					</div>

					<Badge name='Node.js' />
					<Badge name='Express' />
				</div>

				<div className={styles.row}>
					<div className={styles.row_label}>
						<h1 className={styles.row_label_text}>DATABASE</h1>
					</div>

					<Badge name='MySQL' />
					<Badge name='Sequelize' />
				</div>
			</div>
		</section>
	);
}
