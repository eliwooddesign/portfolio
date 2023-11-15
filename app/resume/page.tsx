import { getKey } from '@/utils';
import { experiences, skills } from '@/data';

import styles from './style.module.css';

export default function Resume() {
	return (
		<main className={styles.main}>
			<section className={styles.skills}>
				<h1>Skills</h1>

				<ul className={styles.skills_content}>
					{skills.map((skill) => {
						const { name, icon } = skill;

						return <li key={getKey()}>{name}</li>;
					})}
				</ul>
			</section>

			<section className={styles.experiences}>
				<h1>Experience</h1>

				<ul className={styles.experiences_content}>
					{experiences.map((experience) => {
						const { employer, title, location, start, end, description } = experience;

						return (
							<li key={getKey()} className={styles.experiences_item}>
								<h3>{employer}</h3>
								<h4>{title}</h4>
								<h4>{location}</h4>
								<h5>{start}</h5>
								<h5>{end}</h5>
								<ul>
									{description.map((bullet) => {
										return <li key={getKey()}>{bullet}</li>;
									})}
								</ul>
							</li>
						);
					})}
				</ul>
			</section>
		</main>
	);
}
