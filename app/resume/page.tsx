import { Badge } from '@/components';
import { classList, getKey } from '@/utils';
import { experiences, skills } from '@/data';

import styles from './style.module.css';

export default function Resume() {
	return (
		<main className={styles.main}>
			<section className={classList(styles.section, styles.skills)}>
				<h2 className={styles.section_title}>Skills</h2>

				<div className={styles.section_content}>
					<div className={classList(styles.content_card, styles.languages)}>
						<div className={styles.badges}>
							<Badge.Next_js className={styles.skill} />
							<Badge.TypeScript className={styles.skill} />
							<Badge.Express className={styles.skill} />
							<Badge.Node_js className={styles.skill} />
							<Badge.Sequelize className={styles.skill} />
							<Badge.MySQL className={styles.skill} />
						</div>
					</div>

					<div className={classList(styles.content_card, styles.tools)}>
						<div className={styles.badges}>
							<Badge.JavaScript className={styles.skill} />
							<Badge.React_js className={styles.skill} />
							<Badge.Html className={styles.skill} />
							<Badge.jQuery className={styles.skill} />
							<Badge.CSS className={styles.skill} />
							<Badge.Bootstrap className={styles.skill} />
							<Badge.Python className={styles.skill} />
							<Badge.Handlebars className={styles.skill} />
							<Badge.SQL className={styles.skill} />
							<Badge.MongoDB className={styles.skill} />
						</div>
					</div>

					<div className={classList(styles.content_card, styles.design)}>
						<div className={styles.badges}>
							<Badge.Adobe__CC className={styles.skill} />
							<Badge.Figma className={styles.skill} />
						</div>
					</div>
				</div>
			</section>

			<section className={classList(styles.section, styles.experience)}>
				<h2>Experience</h2>

				<ul className={styles.experience_content}>
					{experiences.map((experience) => {
						const { employer, title, location, start, end, description } = experience;

						return (
							<li key={getKey()} className={classList(styles.content_card, styles.experience_item)}>
								<h2>{employer}</h2>
								<h3 className={styles.experience_item_title}>{title}</h3>

								<div className={styles.experience_item_details}>
									<h4>{location}</h4>
									<h4>
										{start} - {end}
									</h4>
								</div>

								<ul className={styles.experience_item_description}>
									{description.map((bullet) => {
										return (
											<li key={getKey()} className={styles.experience_item_bullet}>
												{bullet}
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
