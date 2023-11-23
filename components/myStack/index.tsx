import { Badges } from '@/components';

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

					<Badges.typescript />
					<Badges.next__js />
				</div>

				<div className={styles.row}>
					<div className={styles.row_label}>
						<h1 className={styles.row_label_text}>BACKEND</h1>
					</div>

					<Badges.node__js />
					<Badges.express />
				</div>

				<div className={styles.row}>
					<div className={styles.row_label}>
						<h1 className={styles.row_label_text}>DATABASE</h1>
					</div>

					<Badges.mysql />
					<Badges.sequelize />
				</div>
			</div>
		</section>
	);
}
