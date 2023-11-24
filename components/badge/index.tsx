import Component from './component';

import { badges } from '@/assets';
const { adobe__cc, bootstrap, css, express, figma, handlebars, html, javascript, jquery, mongodb, mysql, next_js, node_js, react_js, sequelize, sql, typescript } = badges;

const Badge = {
	Adobe__CC: () => <Component image={adobe__cc} label='Adobe CC' />,
	Bootstrap: () => <Component image={bootstrap} label='Bootstrap' />,
	CSS: () => <Component image={css} label='CSS' />,
	Express: () => <Component image={express} label='Express' />,
	Figma: () => <Component image={figma} label='Figma' />,
	Handlebars: () => <Component image={handlebars} label='Handlebars' />,
	Html: () => <Component image={html} label='HTML' />,
	JavaScript: () => <Component image={javascript} label='JavaScript' />,
	jQuery: () => <Component image={jquery} label='jQuery' />,
	MongoDB: () => <Component image={mongodb} label='MongoDB' />,
	MySQL: () => <Component image={mysql} label='MySQL' />,
	Next_js: () => <Component image={next_js} label='Next.js' />,
	Node_js: () => <Component image={node_js} label='Node.js' />,
	React_js: () => <Component image={react_js} label='React.js' />,
	Sequelize: () => <Component image={sequelize} label='Sequelize' />,
	SQL: () => <Component image={sql} label='SQL' />,
	TypeScript: () => <Component image={typescript} label='TypeScript' />
};

export default Badge;
