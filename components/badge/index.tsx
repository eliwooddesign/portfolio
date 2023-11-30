import { PropsWithChildren } from 'react';

import Component, { Props } from './component';

import { badges } from '@/assets';
const { adobe__cc, bootstrap, css, express, figma, handlebars, html, javascript, jquery, mongodb, mysql, next_js, node_js, python, react_js, sequelize, sql, typescript } = badges;

const buildComponent = ({ image, label }: Props) => {
	return ({ className }: PropsWithChildren<Props>) => {
		return <Component image={image} label={label} className={className} />;
	};
};

const Badge = {
	Adobe__CC: buildComponent({ image: adobe__cc, label: 'Adobe CC' }),
	Bootstrap: buildComponent({ image: bootstrap, label: 'Bootstrap' }),
	CSS: buildComponent({ image: css, label: 'CSS' }),
	Express: buildComponent({ image: express, label: 'Express' }),
	Figma: buildComponent({ image: figma, label: 'Figma' }),
	Handlebars: buildComponent({ image: handlebars, label: 'Handlebars' }),
	Html: buildComponent({ image: html, label: 'HTML' }),
	JavaScript: buildComponent({ image: javascript, label: 'JavaScript' }),
	jQuery: buildComponent({ image: jquery, label: 'jQuery' }),
	MongoDB: buildComponent({ image: mongodb, label: 'MongoDB' }),
	MySQL: buildComponent({ image: mysql, label: 'MySQL' }),
	Next_js: buildComponent({ image: next_js, label: 'Next.js' }),
	Node_js: buildComponent({ image: node_js, label: 'Node.js' }),
	Python: buildComponent({ image: python, label: 'Python' }),
	React_js: buildComponent({ image: react_js, label: 'React.js' }),
	Sequelize: buildComponent({ image: sequelize, label: 'Sequelize' }),
	SQL: buildComponent({ image: sql, label: 'SQL' }),
	TypeScript: buildComponent({ image: typescript, label: 'TypeScript' })
};

export default Badge;
