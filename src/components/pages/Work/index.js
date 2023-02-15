import React from 'react';

import Background from './types/Background';
import Hero from './types/Hero';
import Standard from './types/Standard';

import './style.css';

function Work() {
	return (
		<div className='page'>
			{/* banner */}
			<div className='intro'>
				<h2>Hi, my name is Eli.</h2>

				<h3>I'm always open to new opportunities. Check out my portfolio {window.innerWidth >= 768 && <br />} and let me know if you're interested in working together.</h3>

				{/* <div className='scroll-indicator'>
					<div className='scroll-indicator-background' />
					<p>Scroll</p>
					<svg className='chevron' viewBox='0 0 24 24' width='12' height='12'>
						<polyline points='2 7, 12 17, 22 7' />
					</svg>
				</div> */}
			</div>

			{/* work */}
			<Hero react title='Property Website' description='Promotional websites showcasing a property for sale or for rent, featuring all important property details, engaging potential customers and funneling high value traffic. Designed and built from scratch and successfully deployed several dozen over the last four years.' link='https://mreliwood.github.io/demo-property/' repo='https://github.com/MrEliWood/demo-property' />
			<Standard flip title='Maven Group' description='Experts in PNW real estate. Promotional website serving as the first touchpoint for potential clients and a modern showcase for the services and success of the team.' link='https://www.mavengroupnw.com' />
			<Standard react title='Found Ark' description='A web application that makes it easier for players to find and create groups for the game Lost Ark, without having to rely on giant anonymous servers where they may never get picked up.' link='https://mreliwood.github.io/found-ark/' repo='https://github.com/mreliwood/found-ark' />
			<Standard flip react title='Porefection' description='This web application helps users manage their skincare routine by allowing them to create a detailed list of their skincare products. When the user adds a product to their list, detailed product information is fetched from Sephora API and the list is automatically sorted in the correct order for using the products.' link='https://mreliwood.github.io/porefection' repo='https://github.com/MrEliWood/porefection' />
			<div className='background-wrapper'>
				<Background fadeIn title='Social Network API' description='This Social Network API uses MongoDB to build the foundation for a NoSQL social network. Out of the box, users are able to share thoughts, react to thoughts, and connect with friends.' repo='https://github.com/mreliwood/social-network-api' />
				<Background fadeOut title='E-Commerce Backend' description='This strictly backend e-commerce application allows the user to easily manage their inventory with a MySQL database or lays a solid foundation for a developer planning to build a full stack e-commerce platform.' repo='https://github.com/MrEliWood/e-commerce-back-end' />
			</div>
			<Standard flip single title='Blog Template' description='Free template for developers building a blog based on a MySQL database with complex relationships, including multiple users with hashed passwords powered by bcrypt.' link='http://demo-blog-template.herokuapp.com/' repo='https://github.com/MrEliWood/blog-template' />
			<Standard title='Weather Dashboard' description='A simple display of the current weather and a 5-day forecast. Users can view weather data based on search or their current location in an engaging, easy to use dashboard.' link='https://mreliwood.github.io/demo-weather-dashboard/' repo='https://github.com/MrEliWood/demo-weather-dashboard' />
			<Standard flip title='Recipe Generator' description='Yes, a recipe generator. But a pretty one. Users can find inspiration for their next meal by randomly generating recipes with sorting logic to filter their results by course and/or dietary restrictions and an engaging, intuitive user experience.' link='https://mreliwood.github.io/demo-recipe-generator/' repo='https://github.com/MrEliWood/demo-recipe-generator' />
		</div>
	);
}

export default Work;
