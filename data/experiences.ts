type experience = {
	employer: string;
	title: string;
	location: string;
	start: string;
	end: string;
	description: string[];
};

const experiences: experience[] = [
	{
		employer: 'Apple a Day',
		title: 'Full Stack Software Engineer & UX/UI Designer',
		location: 'Remote',
		start: 'June 2023',
		end: 'Present',
		description: ['Developed a custom point of sale (POS) system tailored to the specific needs of a Seattle food bank, utilizing modern web technologies such as React, Tailwind CSS, Node.js, and Express.', 'Implemented real-time updates for inventory management, allowing for accurate tracking of stock levels and automated alerts for low-stock items, thereby reducing potential shortages.', 'Implemented version control and code review processes, utilizing tools like Git and conducting regular peer reviews to maintain code quality and foster a collaborative development environment.']
	}
];

export default experiences;
