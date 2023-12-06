import { Badge, Card } from '@/components';
import { classList } from '@/utils';

import Section from '../component';

import styles from './style.module.css';

interface Props {
	className?: string;
}

export default function Skills({ className = '' }: Props) {
	return (
		<Section className={classList(styles.skills, className)}>
			<h1>Skills</h1>

			<div className={styles.section_content}>
				<Card className={styles.languages}>
					<div className={styles.badge_container}>
						<Badge.Next_js className={styles.badge} />
						<Badge.TypeScript className={styles.badge} />
						<Badge.Express className={styles.badge} />
						<Badge.Node_js className={styles.badge} />
						<Badge.Sequelize className={styles.badge} />
						<Badge.MySQL className={styles.badge} />
					</div>
				</Card>

				<Card className={styles.tools}>
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
				</Card>

				<Card className={styles.design}>
					<div className={styles.badge_container}>
						<Badge.Adobe__CC className={styles.badge} />
						<Badge.Figma className={styles.badge} />
					</div>
				</Card>
			</div>
		</Section>
	);
}
