type skill = {
	name: string;
	icon: any;
};

const allSkills: skill[] = [
	{
		name: 'JavaScript',
		icon: ''
	},
	{
		name: 'React',
		icon: ''
	},
	{
		name: 'Next.js',
		icon: ''
	},
	{
		name: 'HTML',
		icon: ''
	},
	{
		name: 'CSS',
		icon: ''
	},
	{
		name: 'TypeScript',
		icon: ''
	},
	{
		name: 'Node.js',
		icon: ''
	},
	{
		name: 'Express',
		icon: ''
	},
	{
		name: 'Python',
		icon: ''
	},
	{
		name: 'MySQL',
		icon: ''
	},
	{
		name: 'Sequelize',
		icon: ''
	},
	{
		name: 'MongoDB',
		icon: ''
	},
	{
		name: 'jQuery',
		icon: ''
	},
	{
		name: 'Bootstrap',
		icon: ''
	},
	{
		name: 'Handlebars',
		icon: ''
	},
	{
		name: 'UX/UI Design',
		icon: ''
	},
	{
		name: 'Adobe CC',
		icon: ''
	},
	{
		name: 'Figma',
		icon: ''
	},
	{
		name: 'Sketch',
		icon: ''
	}
];

const myStack = {
	labels: ['Environment', 'Tool', 'Support'],
	frontend: ['TypeScript', 'React.js', 'CSS'],
	backend: ['Node.js', 'Express'],
	database: ['SQL', 'Sequelize']
};

const skills = {
	allSkills,
	myStack
};

export default skills;
