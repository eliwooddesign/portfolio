import React from 'react';

import Background from './types/Background';
import Hero from './types/Hero';
import Standard from './types/Standard';
import CascadingSolarSystem from './types/CSS';

import workData from './data';

import './style.css';

function Work() {
	return (
		<div className='page'>
			<div className='intro'>
				<h2>Hi, my name is Eli.</h2>
				<h3>I'm always open to new opportunities. Check out my portfolio {window.innerWidth >= 768 && <br />} and let me know if you're interested in working together.</h3>
			</div>

			<Hero data={workData.propertyWebsite} />
			<Standard flip data={workData.mavenGroup} />
			<CascadingSolarSystem />
			<Standard flip hideMobile data={workData.blogTemplate} />
			<Background fadeOut data={workData.eCommerceBackend} />
			<Standard flip data={workData.recipeGenerator} />
		</div>
	);
}

export default Work;
