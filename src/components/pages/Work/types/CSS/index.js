import React, { useState, useEffect } from 'react';
import './style.css';

function CSS() {
	// scroll modifier
	const [modifier, setModifier] = useState(0.005);

	// scroll effect
	const handleScroll = () => {
		// get elements from the page
		const position = document.getElementById('cascading-solar-system').getBoundingClientRect().top;

		// set scroll modifier
		if (position / -window.innerHeight > 0.6) {
			setModifier(0.6);
		} else if (position < 0) {
			setModifier(position / -window.innerHeight);
		} else {
			setModifier(0.005);
		}
	};

	// listen for scroll event
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		handleScroll();
		// eslint-disable-next-line
	}, []);

	return (
		<div id='cascading-solar-system' className='sticky-container'>
			<div className='css-container'>
				<div id='saturn' className='planet' style={{ transform: `scale(${modifier})` }}>
					<div id='saturn-surface' className='surface'>
						<div id='saturn-surface-color-1' />
					</div>

					<div className='hazey-border saturn-border'>
						<div className='hazey-border-inset saturn-border-inset'>
							<div className='shadow' />
						</div>
					</div>

					<div id='saturn-rings-back-rotator'>
						<div id='saturn-rings-back'>
							<div id='saturn-rings-back-top' />
							<div id='saturn-rings-back-bottom' />
						</div>
					</div>

					<div id='saturn-rings-front-rotator'>
						<div id='saturn-rings-front'>
							<div id='saturn-rings-front-top' />
							<div id='saturn-rings-front-bottom' />
						</div>
					</div>

					<div id='saturn-moon-1-orbit'>
						<div id='saturn-moon-1'>
							<div className='surface'>
								<div id='saturn-moon-1-surface-color-1' className='surface-color-gray' />
								<div id='saturn-moon-1-surface-color-2' className='surface-color-gray' />
							</div>

							<div className='hazey-border-inset saturn-moon-border-inset'>
								<div className='shadow' />
							</div>
						</div>
					</div>

					<div id='saturn-moon-2-orbit'>
						<div id='saturn-moon-2'>
							<div className='surface'>
								<div id='saturn-moon-2-surface-color-1' className='surface-color-gray' />
								<div id='saturn-moon-2-surface-color-2' className='surface-color-gray' />
							</div>

							<div className='hazey-border-inset saturn-moon-border-inset'>
								<div className='shadow' />
							</div>
						</div>
					</div>

					<div id='saturn-moon-3-orbit'>
						<div id='saturn-moon-3'>
							<div className='surface'>
								<div id='saturn-moon-3-surface-color-1' className='surface-color-gray' />
								<div id='saturn-moon-3-surface-color-2' className='surface-color-gray' />
							</div>

							<div className='hazey-border-inset saturn-moon-border-inset'>
								<div className='shadow' />
							</div>
						</div>
					</div>

					<div id='saturn-moon-4-orbit'>
						<div id='saturn-moon-4'>
							<div className='surface'>
								<div id='saturn-moon-4-surface-color-1' className='surface-color-gray' />
								<div id='saturn-moon-4-surface-color-2' className='surface-color-gray' />
							</div>

							<div className='hazey-border-inset saturn-moon-border-inset'>
								<div className='shadow' />
							</div>
						</div>
					</div>

					<div id='saturn-moon-5-orbit'>
						<div id='saturn-moon-5'>
							<div className='surface'>
								<div id='saturn-moon-5-surface-color-1' className='surface-color-gray' />
								<div id='saturn-moon-5-surface-color-2' className='surface-color-gray' />
							</div>

							<div className='hazey-border-inset saturn-moon-border-inset'>
								<div className='shadow' />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='css-panel-details'>
				<div className='css-panel-details-outer'>
					<div className='css-panel-details-inner'>
						<div className='preview-details-css'>
							<h2 className='preview-title'>Cascading Solar System</h2>

							<p className='project-description-right'>
								An educational website intended to teach students about our solar system. The Sun, eight plants and all of their moons are included, with detailed information stored in a MySQL database and served with Express.
								<br />
								<br />
								This project is also an exercise in CSS. The visuals are built entirely from vanilla CSS. There are no images, svgs, or videos used anywhere on the site. Even the planets are built entirely from scratch and their movement is relative to actual time.
							</p>

							<div className='preview-links'>
								<a href='https://cascading-solar-system.herokuapp.com' target='_blank' rel='noreferrer' className='icon-link-right'>
									<img src='./assets/icons/web-icon.png' alt='deployed application link' className='icon'></img>
									<p className='css-icon-description-right'>Deployed Application</p>
								</a>

								<a href='https://github.com/matthewtodor/Cascading-Solar-System' target='_blank' rel='noreferrer' className='icon-link-right'>
									<img src='./assets/icons/GitHub-Mark-Light-120px-plus.png' alt='GitHub repository link' className='icon'></img>
									<p className='css-icon-description-right'>GitHub Repository</p>
								</a>

								<div className='icon-link-right'>
									<img src='./assets/icons/React-icon.png' alt='GitHub repository link' className='icon'></img>
									<p className='css-icon-description-right'>Made with React</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='sticky-spacer-large' />
		</div>
	);
}

export default CSS;
