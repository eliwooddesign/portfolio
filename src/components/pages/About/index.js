import React from 'react';
import './style.css';

function About() {
	return (
		<div className='page'>
			<div className='about'>
				<img src='./assets/images/casual-headshot-portrait.png' alt='personal portrait' className='portrait' />

				<div className='about-bio'>
					<h2>Hi, my name is Eli.</h2>

					<h3>With a background in design and nearly four years of professional web development experience, I pride myself on making astonishing digital experiences. I recently earned a certificate in Full Stack Web Development from the University of Washington, where I developed skills in JavaScript, CSS, React.js, and responsive web design.</h3>
					<h3>An innovative problem solver passionate about developing apps, with a focus on user-centered design and mobile-first development. My previous career in sales management and web design experience has prepared me to approach problems with creativity and teamwork.</h3>
					<h3>With each project, I strive to deliver the most impactful user experience and design with purpose. I applied aspects of UX and agile development in a recent project where I worked in a team of 3 to develop a full stack web application that helps Lost Ark players to find and create groups.</h3>
					<h3>When I’m not designing or developing, I enjoy going to concerts, movies, trying out a new restaurant, or reading up on the latest trends in web and mobile design.</h3>
					<h3>I’m excited to leverage my skills in the future as part of a fast-paced, quality-driven team. Check out some of my work and reach out when you're ready to chat about our next project.</h3>
				</div>
			</div>

			<div className='skills'>
				<div className='skills-section'>
					<h2>Languages</h2>

					<div className='skills-sub-section'>
						<div className='skills-icon-container'>
							<img src='./assets/icons/html-icon.png' alt='html icon' className='skills-icon' />
							<p>HTML</p>
						</div>

						<div className='skills-icon-container'>
							<img src='./assets/icons/css-icon.png' alt='html icon' className='skills-icon' />
							<p>CSS</p>
						</div>

						<div className='skills-icon-container'>
							<img src='./assets/icons/javascript-icon.png' alt='html icon' className='skills-icon' />
							<p>JavaScript</p>
						</div>

						<div className='skills-icon-container'>
							<img src='./assets/icons/typescript-icon.png' alt='html icon' className='skills-icon' />
							<p>TypeScript</p>
						</div>

						<div className='skills-icon-container'>
							<img src='./assets/icons/sql-icon.png' alt='html icon' className='skills-icon' />
							<p>SQL</p>
						</div>
					</div>
				</div>

				<div className='skills-section'>
					<h2>Tools</h2>

					<div className='skills-sub-section'>
						<div className='skills-icon-container'>
							<img src='./assets/icons/mongo-icon.png' alt='html icon' className='skills-icon' />
							<p>MongoDB</p>
						</div>

						<div className='skills-icon-container'>
							<img src='./assets/icons/express-icon.png' alt='html icon' className='skills-icon' />
							<p>Express</p>
						</div>

						<div className='skills-icon-container'>
							<img src='./assets/icons/React-icon.png' alt='html icon' className='skills-icon' />
							<p>React.js</p>
						</div>

						<div className='skills-icon-container'>
							<img src='./assets/icons/node-icon.png' alt='html icon' className='skills-icon' />
							<p>Node.js</p>
						</div>
					</div>

					<div className='skills-sub-section'>
						<div className='skills-icon-container'>
							<img src='./assets/icons/mysql-icon.png' alt='html icon' className='skills-icon' />
							<p>MySQL</p>
						</div>

						<div className='skills-icon-container'>
							<img src='./assets/icons/sequelize-icon.png' alt='html icon' className='skills-icon' />
							<p>Sequelize</p>
						</div>

						<div className='skills-icon-container'>
							<img src='./assets/icons/jquery-icon.png' alt='html icon' className='skills-icon' />
							<p>jQuery</p>
						</div>

						<div className='skills-icon-container'>
							<img src='./assets/icons/bootstrap-icon.png' alt='html icon' className='skills-icon' />
							<p>Bootstrap</p>
						</div>

						<div className='skills-icon-container'>
							<img src='./assets/icons/handlebars-icon.png' alt='html icon' className='skills-icon' />
							<p>Handlebars</p>
						</div>
					</div>

					<div className='skills-sub-section'>
						<div className='skills-icon-container'>
							<img src='./assets/icons/adobe-icon.png' alt='html icon' className='skills-icon' />
							<p>Adobe CC</p>
						</div>

						<div className='skills-icon-container'>
							<img src='./assets/icons/figma-icon.png' alt='html icon' className='skills-icon' />
							<p>Figma</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
