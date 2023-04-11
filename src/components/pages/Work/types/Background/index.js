import React, { useState, useEffect } from 'react';
import './style.css';

function Background({ title, description, link, repo, react, flip, fadeIn, fadeOut }) {
	// create id based on title
	const id = title.replace(/ /g, '-').toLowerCase();

	// set default background position
	const [backgroundHeight, setBackgroundHeight] = useState(-window.innerHeight);
	const [backgroundPosition, setBackgroundPosition] = useState(0);

	// set background based on props and screen size
	let styles;

	if (fadeIn) {
		window.innerWidth > 1024
			? (styles = {
					backgroundImage: `url('./assets/work/${id}/background.png')`,
					top: backgroundPosition,
					'max-height': `${backgroundHeight}px`
			  })
			: (styles = {
					backgroundImage: `linear-gradient(var(--background), var(--background75)), url('./assets/work/${id}/background.png')`,
					position: 'static'
			  });
	} else if (fadeOut) {
		window.innerWidth > 1024
			? (styles = {
					backgroundImage: `url('./assets/work/${id}/background.png')`,
					top: backgroundPosition,
					'max-height': `${backgroundHeight}px`
			  })
			: (styles = {
					backgroundImage: `linear-gradient(var(--background75), var(--background)), url('./assets/work/${id}/background.png')`,
					position: 'static'
			  });
	} else {
		window.innerWidth > 1024
			? (styles = {
					backgroundImage: `url('./assets/work/${id}/background.png')`,
					top: backgroundPosition,
					'max-height': `${backgroundHeight}px`
			  })
			: (styles = {
					backgroundImage: `linear-gradient(var(--background75), var(--background75)), url('./assets/work/${id}/background.png')`,
					position: 'static'
			  });
	}

	// scroll effect
	const handleScroll = () => {
		// get elements from the page
		const position = document.getElementById(id).getBoundingClientRect().top;

		if (position < -window.innerHeight) {
			setBackgroundPosition('auto');
			setBackgroundHeight(0);
		} else if (position < 0) {
			setBackgroundPosition('auto');
			setBackgroundHeight(window.innerHeight + position);
		} else if (position <= window.innerHeight) {
			setBackgroundPosition(0);
			setBackgroundHeight(window.innerHeight - position);
		} else {
			setBackgroundPosition(0);
			setBackgroundHeight(0);
		}
	};

	// listen for scroll event
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		handleScroll();
		// eslint-disable-next-line
	}, []);

	return (
		<>
			<div id={'background-' + id} className='background-scroll-image' style={window.innerWidth > 1024 ? styles : { display: 'none' }} />

			<div id={id} className='project-preview-background' style={window.innerWidth <= 1024 ? styles : { display: 'flex' }}>
				<div className='placeholder-container' style={{ width: '50%' }}></div>

				<div className='preview-details-background'>
					<h2 className='preview-title'>{title}</h2>

					<p className='project-description-right'>{description}</p>

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
		</>
	);
}

export default Background;
