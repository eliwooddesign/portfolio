import Image, { StaticImageData } from 'next/image';

import styles from './style.module.css';

import { badges } from '@/assets';

const { adobe__cc, bootstrap, css, express, figma, handlebars, html, javascript, jquery, mongodb, mysql, next_js, node_js, react_js, sequelize, sql, typescript } = badges;

const createBadge = (image: StaticImageData, label: string) => (
	<div className={styles.badge_container}>
		<Image src={image} alt={`${label} badge`} className={styles.badge} />
		{label && <h5 className={styles.badge_label}>{label}</h5>}
	</div>
);

const Badge = {
	Adobe__CC: () => createBadge(adobe__cc, 'Adobe CC'),
	Bootstrap: () => createBadge(bootstrap, 'Bootstrap'),
	CSS: () => createBadge(css, 'CSS'),
	Express: () => createBadge(express, 'Express'),
	Figma: () => createBadge(figma, 'Figma'),
	Handlebars: () => createBadge(handlebars, 'Handlebars'),
	Html: () => createBadge(html, 'HTML'),
	JavaScript: () => createBadge(javascript, 'JavaScript'),
	jQuery: () => createBadge(jquery, 'jQuery'),
	MongoDB: () => createBadge(mongodb, 'MongoDB'),
	MySQL: () => createBadge(mysql, 'MySQL'),
	Next_js: () => createBadge(next_js, 'Next.js'),
	Node_js: () => createBadge(node_js, 'Node.js'),
	React_js: () => createBadge(react_js, 'React.js'),
	Sequelize: () => createBadge(sequelize, 'Sequelize'),
	SQL: () => createBadge(sql, 'SQL'),
	TypeScript: () => createBadge(typescript, 'TypeScript')
};

export default Badge;
