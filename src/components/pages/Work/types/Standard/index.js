import React, { useState, useEffect } from 'react';
import './style.css';

function Standard({ title, description, link, repo, react, flip, single }) {
	// create id based on title
	const id = title.replace(/ /g, '-').toLowerCase();

	// parallax modifier
	const [modifier, setModifier] = useState(0);

	// parallax effect
	const handleScroll = () => {
		// get elements from the page
		const position = document.getElementById(id).getBoundingClientRect().top;

		// set parallax variables
		let offset;
		let moveSpeed;

		if (window.innerWidth > 768) {
			offset = window.innerHeight / 4;
			moveSpeed = 1;
		} else if (window.innerWidth > 480) {
			offset = window.innerHeight / 3;
			moveSpeed = 0.8;
		} else {
			offset = -window.innerHeight / 4;
			moveSpeed = 0.4;
		}

		// set parallax modifier
		if (position < offset) {
			setModifier((window.innerHeight - offset) * moveSpeed);
		} else if (position < window.innerHeight) {
			setModifier((window.innerHeight - position) * moveSpeed);
		}
	};

	// listen for scroll event
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		handleScroll();
		// eslint-disable-next-line
	}, []);

	return (
		<div className='sticky-container'>
			<div id={id} className={flip ? 'project-preview-right' : 'project-preview-left'}>
				<div className={single ? 'preview-thumbnail-center' : flip ? 'preview-thumbnail-right' : 'preview-thumbnail-left'}>
					<a href={link} target='_blank' rel='noreferrer' className='project-thumbnail-desktop-link' style={{ transform: `translateY(-${Math.floor(modifier / 5)}px)` }}>
						<img src={'./assets/work/' + id + '/desktop-mockup.png'} alt={title + ' desktop preview'} className='project-thumbnail-desktop'></img>
					</a>

					{!single && (
						<a href={link} target='_blank' rel='noreferrer' className='project-thumbnail-phone-link' style={{ transform: `translateY(${Math.floor(modifier / 10)}px)` }}>
							<img src={'./assets/work/' + id + '/mobile-mockup.png'} alt={title + ' mobile preview'} className='project-thumbnail-phone'></img>
						</a>
					)}
				</div>

				<div className={flip ? 'preview-details-left' : 'preview-details-right'}>
					<h2 className='preview-title'>{title}</h2>

					<p className={flip ? 'project-description-left' : 'project-description-right'}>{description}</p>

					<div className='preview-links'>
						{link && (
							<a href={link} target='_blank' rel='noreferrer' className={flip ? 'icon-link-left' : 'icon-link-right'}>
								<img src='./assets/icons/web-icon.png' alt='deployed application link' className='icon'></img>
								<p className={flip ? 'icon-description-left' : 'icon-description-right'}>Deployed Application</p>
							</a>
						)}
						{repo && (
							<a href={repo} target='_blank' rel='noreferrer' className={flip ? 'icon-link-left' : 'icon-link-right'}>
								<img src='./assets/icons/GitHub-Mark-Light-120px-plus.png' alt='GitHub repository link' className='icon'></img>
								<p className={flip ? 'icon-description-left' : 'icon-description-right'}>GitHub Repository</p>
							</a>
						)}
						{react && (
							<div className={flip ? 'icon-link-left' : 'icon-link-right'}>
								<img src='./assets/icons/React-icon.png' alt='GitHub repository link' className='icon'></img>
								<p className={flip ? 'icon-description-left' : 'icon-description-right'}>Made with React</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Standard;
