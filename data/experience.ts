type experienceItem = {
	employer: string;
	title: string;
	location: string;
	start: string;
	end: string;
	description: string[];
};

const experience: experienceItem[] = [
	{
		employer: 'Apple a Day',
		title: 'Full Stack Software Engineer & UX/UI Designer',
		location: 'Remote',
		start: 'June 2023',
		end: 'Present',
		description: [
			// prettier-ignore
			`Developed a custom point of sale (POS) system tailored to the specific needs of a Seattle food bank, utilizing modern web technologies such as React, Tailwind CSS, Node.js, and Express.`,
			`Implemented real-time updates for inventory management, allowing for accurate tracking of stock levels and automated alerts for low-stock items, thereby reducing potential shortages.`,
			`Implemented version control and code review processes, utilizing tools like Git and conducting regular peer reviews to maintain code quality and foster a collaborative development environment.`
		]
	},
	{
		employer: 'UC Berkeley & UW',
		title: 'Web Development Instructional Specialist via edX',
		location: 'Remote',
		start: 'January 2023',
		end: 'Present',
		description: [
			// prettier-ignore
			`Developed and facilitated an engaging web development curriculum for 50+ students, resulting in a 95% completion rate and an increase in student satisfaction surveys by 20%.`,
			`Implemented interactive teaching methods, such as pair programming and group coding projects, resulting in a 30% increase in student engagement during online discussions.`,
			`Utilized data-driven approaches to track progress and identify areas of improvement for the course curriculum, resulting in a decrease of student dropouts by 10%.`
		]
	},
	{
		employer: 'Maven Group',
		title: 'Full Stack Software Engineer & UX/UI Designer',
		location: 'Bellevue, WA',
		start: 'February 2019',
		end: 'January 2023',
		description: [
			// prettier-ignore
			`Designed and built several dozen SPAs, streamlining the digital marketing pipeline and increasing contract wins, adding $1.4M in additional sales.`,
			`Transformed UIs using React, modernizing the development process, decreasing debugging time, and improving user experience.`,
			`Collaborated with cross-functional teams to identify bottlenecks in the development process and implemented new workflows, reducing overall development time 20%.`
		]
	},
	{
		employer: 'Bose',
		title: 'General Manager',
		location: 'Bellevue, WA',
		start: 'November 2013',
		end: 'April 2019',
		description: [
			// prettier-ignore
			`Implemented a new sales training program, resulting in a 25% increase in average transaction value and a 15% improvement in customer conversion rates.`,
			`Managed the successful launch of a B2C program, which generated $500K in revenue within the first quarter and achieved an NPS score of 95.`,
			`Collaborated with cross-functional teams to improve store layout and visual merchandising, resulting in a 20% decrease in customer complaints and an increase of 5% on customer experience scores.`
		]
	},
	{
		employer: 'University of Oregon',
		title: 'IT Team Lead',
		location: 'Eugene, OR',
		start: 'June 2012',
		end: 'August 2013',
		description: [
			// prettier-ignore
			`Managed a team of 6 IT experts to provide timely and effective hardware and software support to over 30,000 faculty, staff, and students, resulting in a 90% satisfaction rate.`,
			`Implemented an improved ticketing system for IT support requests that reduced average response time by 50%, resulting in a more efficient resolution process.`,
			`Collaborated with university leadership to identify technology needs in order to develop long-term strategies for modernizing the university's IT infrastructure.`
		]
	}
];

export default experience;
