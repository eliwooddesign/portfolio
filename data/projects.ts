export interface Project {
	name: string;
	slug: string;
}

export const projectNames = ['Apple a Day', 'Maven Group', 'Property Website', 'Social Network API', 'Cascading Solar System'];

export const projects = projectNames.map((name) => {
	const slug = name.toLowerCase().replaceAll(' ', '-');

	return { name, slug } as Project;
});

export default projects;
