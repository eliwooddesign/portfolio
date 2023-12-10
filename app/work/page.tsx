import Link from 'next/link';

import { Card } from '@/components';
import { projects } from '@/data';

import styles from './style.module.css';

export default function Work() {
	return (
		<main className={styles.page}>
			{projects.map((project) => {
				const { name, slug } = project;

				return (
					<Link href={'/work/' + slug} className={styles.project_container}>
						<Card>
							<section className={styles.project}>
								<h1>{name}</h1>
								<h2>{slug}</h2>
							</section>
						</Card>
					</Link>
				);
			})}
		</main>
	);
}
