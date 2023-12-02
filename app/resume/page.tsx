import { Badge } from '@/components';
import { classList, getKey } from '@/utils';
import { experience, skills } from '@/data';

import styles from './style.module.css';

export default function Resume() {
	return (
		<main className={styles.main}>
			<section className={classList(styles.section, styles.skills)}>
				<h1>Skills</h1>

				<div className={styles.section_content}>
					<div className={classList(styles.content_card, styles.languages)}>
						<div className={styles.badge_container}>
							<Badge.Next_js className={styles.badge} />
							<Badge.TypeScript className={styles.badge} />
							<Badge.Express className={styles.badge} />
							<Badge.Node_js className={styles.badge} />
							<Badge.Sequelize className={styles.badge} />
							<Badge.MySQL className={styles.badge} />
						</div>
					</div>

					<div className={classList(styles.content_card, styles.tools)}>
						<div className={styles.badge_container}>
							<Badge.JavaScript className={styles.badge} />
							<Badge.React_js className={styles.badge} />
							<Badge.Html className={styles.badge} />
							<Badge.jQuery className={styles.badge} />
							<Badge.CSS className={styles.badge} />
							<Badge.Bootstrap className={styles.badge} />
							<Badge.Python className={styles.badge} />
							<Badge.Handlebars className={styles.badge} />
							<Badge.SQL className={styles.badge} />
							<Badge.MongoDB className={styles.badge} />
						</div>
					</div>

					<div className={classList(styles.content_card, styles.design)}>
						<div className={styles.badge_container}>
							<Badge.Adobe__CC className={styles.badge} />
							<Badge.Figma className={styles.badge} />
						</div>
					</div>
				</div>
			</section>

			<section className={classList(styles.section, styles.experience)}>
				<h1>Experience</h1>

				<ul className={styles.experience_content}>
					{experience.map((experienceItem) => {
						const { employer, title, location, start, end, description } = experienceItem;

						return (
							<li key={getKey()} className={classList(styles.content_card, styles.experience_item)}>
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
							</li>
						);
					})}
				</ul>
			</section>
		</main>
	);
}
