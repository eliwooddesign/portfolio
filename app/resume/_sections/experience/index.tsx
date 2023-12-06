import { Card } from '@/components';
import { classList, getKey } from '@/utils';
import { experience } from '@/data';

import Section from '../component';

import styles from './style.module.css';

interface Props {
	className?: string;
}

export default function Experience({ className = '' }: Props) {
	return (
		<Section className={classList(styles.experience, className)}>
			<h1>Experience</h1>

			<div className={styles.section_content}>
				{experience.map((experienceItem) => {
					const { employer, title, location, start, end, description } = experienceItem;

					return (
						<Card key={getKey()} className={classList(styles.content_card, styles.experience_item)}>
							<div className={styles.experience_item_headline}>
								<h2>{employer}</h2>
								<h4>{title}</h4>
							</div>

							<div className={styles.experience_item_details}>
								<h5>{location}</h5>
								<h5>
									{start} - {end}
								</h5>
							</div>

							<ul className={styles.experience_item_description}>
								{description.map((bullet) => {
									return (
										<li key={getKey()} className={styles.experience_item_bullet}>
											<p>{bullet}</p>
										</li>
									);
								})}
							</ul>
						</Card>
					);
				})}
			</div>
		</Section>
	);
}
