import React, { useState, useEffect } from 'react';
import './style.css';

function Hero({ title, description, link, repo, react }) {
	// hero position
	const [heroPosition, setHeroPosition] = useState();

	// sticky spacer size
	const [spacer, setSpacer] = useState(0);

	// hero animation properties
	const [heroSize, setHeroSize] = useState(1);
	const [imagePosition, setImagePosition] = useState(0);
	const [parallaxSpeed, setParallaxSpeed] = useState(2);

	// parallax modifier
	const [heroMod, setHeroMod] = useState(0);

	// offset for use on page
	const [pageOffset, setPageOffset] = useState(0);

	// create id based on title
	const id = title.replace(/ /g, '-').toLowerCase();

	// create id for resizeable container
	const resizer = id + '-resizer';

	// hero image animation
	const handleScroll = () => {
		// get element position from the page
		const heroTop = document.getElementById(id).getBoundingClientRect().top;

		setHeroPosition(heroTop);

		// get size of hero image
		const heroWidth = document.getElementById(resizer).offsetWidth;

		// set parallax stopping point
		let offset = -window.innerHeight * 10;

		// set animation variables based on screen size
		let moveSpeed; // parallax speed
		let breakpoint; // where resize stops

		if (window.innerWidth > 768) {
			moveSpeed = 1;
			breakpoint = window.innerHeight / 4;
		} else if (window.innerWidth > 480) {
			moveSpeed = 0.8;
			breakpoint = window.innerHeight / 3;
		} else {
			moveSpeed = 0.9;
			breakpoint = -window.innerHeight / 4;
		}

		// set offset for use on page
		setPageOffset(breakpoint);

		// set resize speed
		const resizeSpeed = 0.9;

		// set size of sticky spacer
		setSpacer(heroWidth / resizeSpeed);

		// set resize progress
		let resizeProgress = ((heroTop - breakpoint / 2) * resizeSpeed) / (-heroWidth / resizeSpeed + breakpoint);

		// set hero size based on progress
		if (window.innerWidth > 1024) {
			if (resizeProgress < 0) {
				setHeroSize(2);
				setImagePosition(heroWidth / 2);
			} else if (resizeProgress > 1) {
				setHeroSize(1);
				setImagePosition(0);
			} else {
				setHeroSize(2 - resizeProgress);
				setImagePosition((1 - resizeProgress) * (heroWidth / 2));
			}
		} else {
			setHeroSize(1);
			setParallaxSpeed(1.5);
		}

		// set parallax modifier
		if (heroTop < offset) {
			setHeroMod((window.innerHeight - offset) * moveSpeed);
		} else if (heroTop < window.innerHeight) {
			setHeroMod((window.innerHeight - heroTop) * moveSpeed);
		}
	};

	// listen for scroll event
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		handleScroll();
		// eslint-disable-next-line
	}, []);

	return (
		<div id={id} className='sticky-container'>
			<div className='project-preview-hero'>
				<div id={resizer} className='resizer'>
					<div className='preview-thumbnail-hero' style={{ transform: `matrix(${heroSize}, 0, 0, ${heroSize}, ${imagePosition}, 0)` }}>
						<a href={link} target='_blank' rel='noreferrer' className='project-thumbnail-desktop-link' style={{ transform: `translateY(-${Math.floor(heroMod / (5 * parallaxSpeed))}px)` }}>
							<img src={'./assets/work/' + id + '/desktop-mockup.png'} alt={title + ' desktop preview'} className='project-thumbnail-desktop'></img>
						</a>

						<a href={link} target='_blank' rel='noreferrer' className='project-thumbnail-phone-link' style={{ transform: `translateY(${Math.floor(heroMod / (8 * parallaxSpeed))}px)`, width: `20%` }}>
							<img src={'./assets/work/' + id + '/mobile-mockup.png'} alt={title + ' mobile preview'} className='project-thumbnail-phone'></img>
						</a>
					</div>
				</div>

				<div className={heroPosition <= -spacer + pageOffset * 1.5 || window.innerWidth <= 1024 ? 'preview-details-right show-description' : 'preview-details-right hide-description'}>
					<h2 className='preview-title'>{title}</h2>

					<p className={heroPosition <= -spacer + pageOffset * 1.25 || window.innerWidth <= 1024 ? 'project-description-right show-description' : 'project-description-right hide-description'}>{description}</p>

					<div className={heroPosition <= -spacer + pageOffset || window.innerWidth <= 1024 ? 'preview-links show-description' : 'preview-links hide-description'}>
						{link && (
							<a href={link} target='_blank' rel='noreferrer' className='icon-link-hero'>
								<img src='./assets/icons/web-icon.png' alt='deployed application link' className='icon'></img>
								<p className='icon-description-right'>Deployed Application</p>
							</a>
						)}
						{repo && (
							<a href={repo} target='_blank' rel='noreferrer' className='icon-link-hero'>
								<img src='./assets/icons/GitHub-Mark-Light-120px-plus.png' alt='GitHub repository link' className='icon'></img>
								<p className='icon-description-right'>GitHub Repository</p>
							</a>
						)}
						{react && (
							<div className='icon-link-hero'>
								<img src='./assets/icons/React-icon.png' alt='GitHub repository link' className='icon'></img>
								<p className='icon-description-right'>Made with React</p>
							</div>
						)}
					</div>
				</div>
			</div>

			{window.innerWidth > 1024 && <div className='sticky-spacer-large' style={{ height: `${spacer + pageOffset / 10}px` }}></div>}
		</div>
	);
}

export default Hero;
