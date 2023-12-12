export type Project = {
	name: string;
	slug: string;
};

const projectNames: string[] = ['Apple a Day', 'Maven Group', 'Property Website', 'Social Network API'];

const projects: Project[] = projectNames.map((name) => {
	const slug = name.toLowerCase().replaceAll(' ', '-');

	return {
		name,
		slug
	};
});

export default projects;
