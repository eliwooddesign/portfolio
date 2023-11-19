import Image from 'next/image';

import { Badge, Images } from '@/components';
import { getKey } from '@/utils';
import { bio, skills } from '@/data';

import styles from './style.module.css';

export default function About() {
	const { h_1, h_2, h_3, p_1, p_2, p_3, p_4, p_5, p_6, p_7, p_8, p_9 } = bio;
	const { myStack } = skills;
	const stackSections = Object.keys(myStack);

	return (
		<main className={styles.page}>
			<div className={styles.about}>
				<section className={styles.stack}>
					<h1 className={styles.stack_headline}>My Current Stack</h1>

					<div className={styles.stack_row}>
						<h3 className={styles.stack_row_label}>FE</h3>

						<div className={styles.stack_item}>
							<Badge name='TypeScript' />
							<Badge name='CSS' />
						</div>

						<div className={styles.stack_item}>
							<Badge name='React.js' />
							<Badge name='Next.js' />
						</div>
					</div>

					<div className={styles.stack_row}>
						<h3 className={styles.stack_row_label}>BE</h3>

						<div className={styles.stack_item}>
							<Badge name='Node.js' />
						</div>

						<div className={styles.stack_item}>
							<Badge name='Express' />
						</div>
					</div>

					<div className={styles.stack_row}>
						<h3 className={styles.stack_row_label}>DB</h3>

						<div className={styles.stack_item}>
							<Badge name='SQL' />
						</div>

						<div className={styles.stack_item}>
							<Badge name='Sequelize' />
						</div>
					</div>
				</section>

				{/* <section className={styles.stack}>
					<table>
						<thead>
							<tr>
								<th>
									<h1>My Current Stack</h1>
								</th>
							</tr>
						</thead>

						<tbody>
							<tr>
								<th>
									<h3>FE</h3>
								</th>
								<td>
									<Badge name='TypeScript' />
									<Badge name='CSS' />
								</td>
								<td>
									<Badge name='React.js' />
									<Badge name='Next.js' />
								</td>
							</tr>

							<tr>
								<th>
									<h3>BE</h3>
								</th>
								<td>
									<Badge name='Node.js' />
								</td>
								<td>
									<Badge name='Express' />
								</td>
							</tr>

							<tr>
								<th>
									<h3>DB</h3>
								</th>
								<td>
									<Badge name='SQL' />
								</td>

								<td>
									<Badge name='Sequelize' />
								</td>
							</tr>
						</tbody>
					</table>
				</section> */}

				<section className={styles.intro_container}>
					<h1 className={styles.intro_headline}>
						{h_1} {p_1}
					</h1>

					<div className={styles.intro_tagline}>
						<h2>{h_2}</h2>
						<h4>{h_3}</h4>
					</div>
				</section>

				<section className={styles.portrait_container}>
					<Image src={Images.personal.headshot} alt='Portrait of Eli Wood' className={styles.portrait} />

					<h3 className={styles.portrait_text}>
						{p_3}
						<br />
						<br />
						{p_4}
					</h3>
				</section>

				<section className={styles.text_break_container}>
					<h1 className={styles.text_break}>{p_2}</h1>
				</section>

				<section className={styles.pillars}>
					<h2 className={styles.pillar_title}>Intentional.</h2>
					<h3 className={styles.pillar_text}>{p_5}</h3>

					<h2 className={styles.pillar_title}>Practiced.</h2>
					<h3 className={styles.pillar_text}>{p_6}</h3>

					<h2 className={styles.pillar_title}>Eager.</h2>
					<h3 className={styles.pillar_text}>
						{p_8} {p_9}
					</h3>
				</section>

				<section className={styles.text_break_container}>
					<h1 className={styles.text_break}>{p_7}</h1>
				</section>

				{/* <div className={styles.about_bio}>
					{bio.map((paragraph) => {
						const { type, text } = paragraph;

						if (type === 'headline') return <h1>{text}</h1>;
						if (type === 'paragraph') return <p>{text}</p>;
					})}
				</div> */}

				{/* <div className={styles.about_bio}>
					<h1>Hi, my name is Eli.</h1>

					<p>With a background in design and nearly four years of professional web development experience, I pride myself on making astonishing digital experiences. I earned a certificate in Full Stack Web Development from the University of Washington, where I strengthened and refined skills in JavaScript, CSS, React.js, and responsive web design.</p>
					<p>An innovative problem solver passionate about developing apps, with a focus on user-centered design and mobile-first development. My previous career in sales management and web design experience has prepared me to approach problems with creativity and teamwork.</p>
					<p>With each project, I strive to deliver the most impactful user experience and design with purpose. I applied aspects of UX and agile development in a recent project where I worked in a team of 3 to develop a full stack web application that helps Lost Ark players to find and create groups.</p>
					<p>When I’m not designing or developing, I enjoy going to concerts, movies, trying out a new restaurant, or reading up on the latest trends in web and mobile design.</p>
					<p>I’m excited to leverage my skills in the future as part of a fast-paced, quality-driven team. Check out some of my work and reach out when you're ready to chat about our next project.</p>
				</div> */}
			</div>

			{/* <div className={styles.skills}>
				<div className={styles.skills_section}>
					<h2>Languages</h2>

					<div className={styles.skills_sub_section}>
						<Badge name='HTML' />
						<Badge name='CSS' />
						<Badge name='JavaScript' />
						<Badge name='TypeScript' />
						<Badge name='SQL' />
					</div>
				</div>

				<div className={styles.skills_section}>
					<h2>Tools</h2>

					<div className={styles.skills_sub_section}>
						<Badge name='MongoDB' />
						<Badge name='Express' />
						<Badge name='React.js' />
						<Badge name='Node.js' />
					</div>

					<div className={styles.skills_sub_section}>
						<Badge name='MySQL' />
						<Badge name='Sequelize' />
						<Badge name='jQuery' />
						<Badge name='Bootstrap' />
						<Badge name='Handlebars' />
					</div>

					<div className={styles.skills_sub_section}>
						<Badge name='Adobe CC' />
						<Badge name='Figma' />
					</div>
				</div>
			</div> */}
		</main>
	);
}
