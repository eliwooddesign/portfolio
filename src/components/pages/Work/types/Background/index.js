import React from 'react';
import './style.css';

function Background({ title, description, link, repo, react, flip, fadeIn, fadeOut }) {
	// create id based on title
	const id = title.replace(/ /g, '-').toLowerCase();

	// set background based on props and screen size
	let styles;

	if (fadeIn) {
		window.innerWidth > 1024
			? (styles = {
					backgroundImage: `url('./assets/work/${id}/background.png')`
			  })
			: (styles = {
					backgroundImage: `linear-gradient(var(--background90), var(--background50)), url('./assets/work/${id}/background.png')`,
					height: '50vh'
			  });
	} else if (fadeOut) {
		window.innerWidth > 1024
			? (styles = {
					backgroundImage: `url('./assets/work/${id}/background.png')`
			  })
			: (styles = {
					backgroundImage: `linear-gradient(var(--background50), var(--background)), url('./assets/work/${id}/background.png')`,
					height: '50vh'
			  });
	} else {
		window.innerWidth > 1024
			? (styles = {
					backgroundImage: `url('./assets/work/${id}/background.png')`
			  })
			: (styles = {
					backgroundImage: `linear-gradient(var(--background50), var(--background50)), url('./assets/work/${id}/background.png')`,
					height: '50vh'
			  });
	}

	return (
		<div id={id} className='project-preview-left background' style={styles}>
			<div className='placeholder-container' style={{ width: '50%' }}></div>

			<div className='preview-details-right'>
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
	);
}

export default Background;
