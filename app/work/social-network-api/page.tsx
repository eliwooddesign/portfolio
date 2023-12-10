import { Card } from '@/components';

import sections from './_sections';
const { JsonExample } = sections;

import styles from './style.module.css';

export default function SocialNetworkAPI() {
	return (
		<main className={styles.page}>
			<figure className={styles.json}>
				<JsonExample />
			</figure>

			<Card></Card>
		</main>
	);
}
