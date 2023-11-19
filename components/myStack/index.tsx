import { Badge, Icons } from '@/components';

import styles from './style.module.css';

type Props = {};

export default function Stack(props: Props) {
	return (
		<section className={styles.stack}>
			<h1 className={styles.stack_headline}>My Current Stack</h1>

			<div className={styles.stack_row}>
				<h1 className={styles.stack_row_label}>FRONTEND</h1>

				<Badge name='TypeScript' />
				<Badge name='Next.js' />
			</div>

			<div className={styles.stack_row}>
				<h1 className={styles.stack_row_label}>BACKEND</h1>

				<Badge name='Node.js' />
				<Badge name='Express' />
			</div>

			<div className={styles.stack_row}>
				<h1 className={styles.stack_row_label}>DATABASE</h1>

				<Badge name='MySQL' />
				<Badge name='Sequelize' />
			</div>
		</section>
	);
}
