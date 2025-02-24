import { Card } from '@/components';

import { JsonExample } from './_sections';

import styles from './style.module.css';

export default function SocialNetworkAPI() {
	return (
		<main className={styles.page}>
			<h1>Social Network API</h1>

			<div className={styles.json}>
				<JsonExample />
			</div>

			<Card></Card>
		</main>
	);
}
